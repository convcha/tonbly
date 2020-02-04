import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import { AppBar } from "./components/AppBar";
import { api } from "./utils/api";
import { useAuth } from "./utils/auth";
import { Routes } from "./Routes";

export default function App() {
  const auth = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const f = async () => {
      const res = await api.post("/checkAuth");

      if (res.status === 200) {
        auth.setIsAuthenticated(true);
      }

      setLoading(false);
    };
    f();
  }, [auth, auth.isAuthenticated, history]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {auth.isAuthenticated && <AppBar />}
      <Routes />
    </>
  );
}
