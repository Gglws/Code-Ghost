import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";

function HeaderMenu() {

  const LoggedName = localStorage.getItem("name")

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
          MESSAGES (TEMP)
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
      <div className="page-nav-btn">
        <Link to="/about" className="nav-btn-about">
          about
        </Link>
        <Link to="/login" className="nav-btn-login">
          login
        </Link>
      </div>
    </div>
  );
}
}

export default HeaderMenu;
