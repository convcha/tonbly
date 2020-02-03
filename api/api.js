const express = require("express");
const hasher = require("pbkdf2-password")();
const session = require("express-session");
const cors = require("cors");
const got = require("got");

const app = (module.exports = express());

app.set("trust proxy", 1);

app.use(cors());
app.use("/static", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "WwUG9RyrBchgfqXAnkhB",
    cookie: {
      secure: false,
      httpOnly: true,
      domain: "tonbly.localhost"
    }
  })
);

const authenticate = async (email, pass, fn) => {
  if (!module.parent) {
    console.log("Authenticating %s:%s", email, pass);
  }

  const query = `query FindUser {
  user(where: {email: {_eq: "${email}"}}) {
    id
    name
    email
    password
    role
    salt
  }
}`;
  const res = await got
    .post("http://localhost:8080/v1/graphql", {
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": "myadminsecretkey"
      },
      body: JSON.stringify({ query })
    })
    .json();

  const user = res.data.user[0];
  if (!user) {
    return fn(new Error("Cannot find user"));
  }

  hasher({ password: pass, salt: user.salt }, (err, pass, salt, hash) => {
    if (err) {
      return fn(err);
    }

    if (hash === user.password) {
      const sessionUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      };
      return fn(null, sessionUser);
    }

    fn(new Error("Invalid password"));
  });
};

const restrict = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

app.post("/signin", (req, res) => {
  authenticate(req.body.email, req.body.password, (err, user) => {
    if (user) {
      req.session.regenerate(() => {
        req.session.user = user;
        res
          .status(201)
          .json({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
          });
      });
    } else {
      res.sendStatus(401);
    }
  });
});

app.post("/signout", (req, res) => {
  req.session.destroy(() => {
    res.sendStatus(200);
  });
});

app.post("/checkAuth", restrict, (req, res) => {
  res.sendStatus(200);
});

app.get("/hasura-auth", restrict, (req, res) => {
  const user = req.session.user;
  const hasuraVariables = {
    "X-Hasura-Role": user.role,
    "X-Hasura-User-ID": String(user.id)
  };
  res.json(hasuraVariables);
});

if (!module.parent) {
  app.listen(4000);
  console.log("Express started on port 4000");
}
