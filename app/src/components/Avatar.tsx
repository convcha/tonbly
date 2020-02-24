import React from "react";
import Maybe from "graphql/tsutils/Maybe";
import { Avatar as MuiAvatar } from "@material-ui/core";
import { Link } from "./Link";

type AvatarProps = {
  username: string;
  profileImageUrl?: Maybe<string>;
  link?: boolean;
  className?: { root?: string; link?: string; avatar?: string };
  style?: {
    root?: React.CSSProperties;
    link?: React.CSSProperties;
    avatar?: React.CSSProperties;
  };
};

export const Avatar: React.FC<AvatarProps> = props => {
  const { link = true, username, profileImageUrl, className, style } = props;

  return (
    <span className={className?.root} style={style?.root}>
      {link ? (
        <Link
          to={`/users/${username}`}
          color="inherit"
          className={className?.link}
          style={style?.link}
        >
          <MuiAvatar
            src={profileImageUrl ?? ""}
            className={className?.avatar}
            style={style?.avatar}
          />
        </Link>
      ) : (
        <MuiAvatar
          src={profileImageUrl ?? ""}
          className={className?.avatar}
          style={style?.avatar}
        />
      )}
    </span>
  );
};
