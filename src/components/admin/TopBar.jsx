import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white">
      <div>
        <h5 className="mb-0">Dashboard</h5>
      </div>

      <div className="d-flex align-items-center gap-3">
        <span>
          Welcome, <strong>{user?.name || "Admin"}</strong>
        </span>

        <button
          type="button"
          className="btn p-0 border-0 shadow-none"
          onClick={handleLogout}
        >
          <i className="bi bi-box-arrow-right fs-5"></i>
        </button>
      </div>
    </header>
  );
};

export default TopBar;
