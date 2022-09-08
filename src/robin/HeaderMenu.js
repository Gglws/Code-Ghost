import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";

function HeaderMenu() {

  const LoggedName = localStorage.getItem("name")

  if (LoggedName) {
    return (
      <div className="page-nav-container">
        <div className="page-nav-btn">
          <div>
            <Link to="/" className="nav-btn-login">
              HOME
            </Link>
          </div>
          <div>
            <Link to="/about" className="nav-btn-about">
              ABOUT
            </Link>
          </div>
          <div>
          <Link to="/logout" className="nav-btn-login">
            SIGN OUT
          </Link>
        </div>
          <div className="welcome">Welcome,               {LoggedName}!</div>
        </div>
      </div>
    );
  } else {
  return (
    <div className="page-nav-container">
      <div className="page-nav-btn">
        <div>
          <Link to="/" className="nav-btn-login">
            HOME
          </Link>
        </div>
        <div>
          <Link to="/about" className="nav-btn-about">
            ABOUT
          </Link>
        </div>
        <div>
          <Link to="/login" className="nav-btn-login">
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
  }
}

export default HeaderMenu;
