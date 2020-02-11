import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Article from "./pages/Article";
import { ArticleEdit } from "./pages/ArticleEdit";
import { ArticleNew } from "./pages/ArticleNew";
import { ArticleNewMock } from "./pages/ArticleNewMock";
import { useAuth } from "./utils/auth";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export const Routes = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <PrivateRoute path="/articles/new">
      <ArticleNewMock />
    </PrivateRoute>
    <PrivateRoute path="/articles/new">
      <ArticleNew />
    </PrivateRoute>
    <PrivateRoute path="/articles/:id/edit">
      <ArticleEdit />
    </PrivateRoute>
    <PrivateRoute path="/articles/:id">
      <Article />
    </PrivateRoute>
    <PrivateRoute path="/">
      <Home />
    </PrivateRoute>
  </Switch>
);

const PrivateRoute = ({ children, ...rest }: any) => {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
