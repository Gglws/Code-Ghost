import { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider.js";
import axios from "axios";
import Form from './Form.js';

const LoginForm = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const LOGIN_URL = "/api/userSessions";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [newUser, setNewUser] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({email, password}),
        { headers: {'Content-Type': 'application/json'},
        withCredentials: true
      });
      localStorage.setItem("name", response.data[0].fullname)
      localStorage.setItem("ID", response.data[0].id)
        setEmail('');
        setPassword('');
        setSuccess(true);
    } catch (err) {
      if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password')
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login Failed')
      }
      errRef.current.focus();
    }
  }

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in</h1>
          <br />
          <p>
            <a href='/'>Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <form onSubmit={HandleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="current-username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            ></input>
            <label htmlFor="password">Password:</label>
            <input
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            ></input>
            <button>Sign In</button>
          </form>
        </section>

      )
      }
    </>
  )
}
export default LoginForm;
