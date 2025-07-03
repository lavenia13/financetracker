import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Finance Manager</Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/expenses">Expenses</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/budget-tips">Budget Tips</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
