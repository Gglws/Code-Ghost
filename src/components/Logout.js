import { Link } from "react-router-dom";
import HeaderMenu from "../robin/HeaderMenu.js";
import Header from '../robin/Header.js'
import './Login.css'

export default function Logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("ID");
  return (
    <div>
      <HeaderMenu />
      <Header />
      <div className="header-container-login">
        <div className="header-login">
          <h1>UNTIL NEXT TIME, GHOST</h1>
        </div>
      </div>
      <div className="body-container-login">
        <div className="body-login">
          <section>
            <h1>You have logged out.</h1>
            <br />
          </section>
        </div>
      </div>
      <Link to="/" className="nav-btn">
        Go to Home
      </Link>
    </div>
  );
}
