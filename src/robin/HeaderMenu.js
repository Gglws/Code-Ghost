import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";
// import Navbar from "../components/Navbar/Navbar.js";

function HeaderMenu() {
  const LoggedName = localStorage.getItem("name");

  if (LoggedName) {
    return (
      <div className="page-nav-container">
        <div className="page-nav-btn">
          <Link to="/" className="nav-btn-login">
            HOME
          </Link>
          <Link to="/about" className="nav-btn-about">
            ABOUT
          </Link>
          <Link to="/messages" className="nav-btn-login">
            MESSAGES
          </Link>
          <Link to="/logout" className="nav-btn-login">
            SIGN OUT
          </Link>
          <div className="welcome">Welcome, {LoggedName}!</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="page-nav-container">
          {/* <Navbar /> */}
      <div className="page-nav-btn">
          <Link to="/about" className="nav-btn-about">
            ABOUT
          </Link>
          <Link to="/login" className="nav-btn-login">
            LOGIN
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
