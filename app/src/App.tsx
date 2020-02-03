import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./App.css";
import { api } from "./utils/api";
import { profileStorage, useAuth } from "./utils/auth";
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

  const profile = profileStorage.get();

  return (
    <div className="HolyGrail">
      <header
        style={{
          display: "flex",
          alignItems: "center",
          height: "60px",
          marginLeft: "15px",
          marginBottom: "20px"
        }}
      >
        <h1 style={{ marginRight: "25px" }}>Tonbly</h1>
        {auth.isAuthenticated && (
          <>
            <Link to="/" style={{ width: "60px" }}>
              Home
            </Link>
            <Link to="/articles/new" style={{ width: "120px" }}>
              New article
            </Link>
            <span style={{ marginRight: "10px" }}>{profile?.name}</span>{" "}
            <LogoutButton />
          </>
        )}
      </header>
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          <div>
            <Routes />
          </div>
        </main>
        <nav className="HolyGrail-nav">Left Nav</nav>
        <aside className="HolyGrail-ads">Right Nav</aside>
      </div>
      <footer>Footer</footer>
    </div>
  );
}

function LogoutButton() {
  const auth = useAuth();
  const history = useHistory();

  return (
    <>
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Logout
      </button>
    </>
  );
}
