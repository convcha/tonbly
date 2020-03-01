import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import { AppBar } from "./components";
import { Routes } from "./Routes";
import { api } from "./utils/api";
import { useAuth } from "./utils/auth";

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
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {auth.isAuthenticated && <AppBar />}
      <Routes />
    </div>
  );
}
