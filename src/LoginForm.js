import { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider.js";
import axios from "axios";

const LoginForm = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const LOGIN_URL = "/api/userSessions";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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
      console.log(JSON.stringify(response))
        setEmail('');
        setPassword('');
        setSuccess(true);
    } catch (err) {

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
          <h1>Sign In</h1>
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
