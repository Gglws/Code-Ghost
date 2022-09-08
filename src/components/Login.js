import { Link } from 'react-router-dom'
import Form from '../Form.js'
import LoginForm from '../LoginForm.js'
import Header from '../robin/Header.js'
import HeaderMenu from '../robin/HeaderMenu.js'
import './Login.css'
// import Intro from '../robin/Intro.js'
// import { motion, useScroll } from "framer-motion";

export default function Login() {
    return (
        <div>
            {/* <Header /> */}
            <HeaderMenu />
            <Header />
            {/* <Intro clasName="intro-login" scroll={scrollYProgress} /> */}
            <div className="header-container-login">
                <div className="header-login">
                    <h1>Login here, Ghost!</h1>
                </div>
            </div>
            <div className="body-container-login">
                <div className="body-login">
                    <LoginForm />
                </div>
            </div>
            <div className="signup-container">
                <div className="signup">
                    <Form />
                </div>
            </div>
            {/* <Link to='/' className="nav-btn">Go to Home</Link> */}
        </div>
    )
  }
  