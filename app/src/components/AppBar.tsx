import Avatar from "@material-ui/core/Avatar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import {
  createStyles,
  fade,
  makeStyles,
  Theme,
  withStyles
} from "@material-ui/core/styles";
import { AppBar as MuiAppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { AccountCircle } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useAuth } from "../utils/auth";
import { SplitButton } from "./SplitButton";
import { useHistory } from "react-router-dom";

const AntTabs = withStyles({
  root: {
    // borderBottom: "1px solid #e8e8e8"
    borderBottom: "0"
  },
  indicator: {
    backgroundColor: "#1890ff"
  }
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(1),
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      "&:hover": {
        color: "#40a9ff",
        opacity: 1
      },
      "&$selected": {
        color: "#1890ff",
        fontWeight: theme.typography.fontWeightMedium
      },
      "&:focus": {
        color: "#40a9ff"
      }
    },
    selected: {}
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: "#ffffff"
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    iconButtonAvatar: {
      padding: 4
    },
    title: {
      marginRight: 30,
      // flexGrow: 1,
      display: "none",
      fontFamily: "Patua One, cursive",
      // color: "#19857b",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    search: {
      margin: theme.spacing(1, 1.5),
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 120,
        "&:focus": {
          width: 200
        }
      }
    },
    link: {
      margin: theme.spacing(1, 1.5)
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    }
  })
);

export function AppBar() {
  const auth = useAuth();
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl
  ] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    handleMenuClose();
    auth.signout(() => history.push("/"));
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>プロフィール</MenuItem>
      <MenuItem onClick={handleMenuClose}>記事一覧</MenuItem>
      <MenuItem onClick={handleMenuClose}>下書き一覧</MenuItem>
      <MenuItem onClick={handleMenuClose}>設定</MenuItem>
      <MenuItem onClick={handleMenuClose}>ヘルプ</MenuItem>
      <MenuItem onClick={handleMenuClose}>メンバー管理</MenuItem>
      <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <MuiAppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar>
          <Link href="/" underline="none">
            <Typography
              className={classes.title}
              variant="h5"
              color="secondary"
              noWrap
            >
              Tonbri
            </Typography>
          </Link>
          <AntTabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            // onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <AntTab label="ホーム" />
            <AntTab label="グループ" />
            <AntTab label="メンバー" />
          </AntTabs>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon color="disabled" />
              </div>
              <OutlinedInput
                placeholder="検索"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
                labelWidth={0}
              />
            </div>
            <div className={classes.link}>
              <SplitButton />
            </div>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.iconButtonAvatar}
            >
              <Avatar alt="devilune" src="/avatar.jpg" />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Avatar alt="devilune" src="/avatar.jpg" />
            </IconButton>
          </div>
        </Toolbar>
      </MuiAppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
