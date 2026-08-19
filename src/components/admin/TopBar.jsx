import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/login");
  };

  return (
    <header className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white">
      <div>
        <h5 className="mb-0">Dashboard</h5>
      </div>

      <div className="d-flex align-items-center gap-3">
        <span className="fw-medium">Admin</span>

        <button type="button" className="common__btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default TopBar;
