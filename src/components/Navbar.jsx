import React from "react";
import "../styles/Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/image.png" alt="SC Management Logo" />
      </div>
      <h1 className="navbar-title" style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}>
  SC Management System
</h1>

    </nav>
  );
}

export default Navbar;
