import React, { useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../utils/auth";

export const Login = () => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (auth.isAuthenticated) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  const { from } = (location.state as any) || { from: { pathname: "/" } };
  const login = (e: React.FormEvent) => {
    e.preventDefault();
    auth.signin(email, password, () => {
      history.replace(from);
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={login}>Login</button>
        </div>
      </form>
    </div>
  );
};
