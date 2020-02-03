import React, { useCallback, useState } from "react";
import { api } from "./api";

interface Profile {
  id: number;
  name: string;
  email: string;
  role: "tonbly-admin" | "tonbly-user";
}

export const profileStorage = {
  get: (): Profile | undefined =>
    JSON.parse(localStorage.getItem("tonbly:profile") as string),
  set: (value: Profile) =>
    localStorage.setItem("tonbly:profile", JSON.stringify(value)),
  clear: () => localStorage.removeItem("tonbly:profile")
};

export interface Auth {
  setProfile: (value: Profile) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  signin: (
    email: string,
    password: string,
    callback: (...args: any) => any
  ) => void;
  signout: (callback: (...args: any) => any) => void;
}

export const AuthContext = React.createContext({} as Auth);

export const AuthProvider = (props: any) => {
  const [isAuthenticated, setIsAuthenticatedState] = useState(false);
  const setIsAuthenticated = useCallback(
    (value: boolean) => setIsAuthenticatedState(value),
    []
  );

  const signin = async (
    email: string,
    password: string,
    callback: (...args: any) => any
  ) => {
    const res = await api.post("/signin", {
      throwHttpErrors: false,
      json: { email, password }
    });

    if (res.status === 201) {
      profileStorage.set(await res.json());
      setIsAuthenticated(true);
      callback();
    } else {
      console.log(res);
      alert("Login failed.");
    }
  };

  const signout = async (callback: (...args: any) => any) => {
    await api.post("/signout");
    profileStorage.clear();
    setIsAuthenticated(false);
    callback();
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        signin,
        signout
      }}
      {...props}
    />
  );
};

export const useAuth = () => React.useContext(AuthContext);
