import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
//   const [logout, setLogout] = useState("");
  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePassword = (event) => {
    setPassword(event.target.value);
  };
//   const updateLogin = () => {
//     setLogin(true);
//   };
//   const updateLogout = () => {
//     setLogin(false);
//   };
  function HandleSubmit(e) {
    e.preventDefault();
    axios({
      url: "/userSessions", //this needs to be replaced in production
      method: "POST",
      data: { email, password },
      headers: {
        'Content-Type': 'application/json',
    },
    })
    // .then(
    //         setLogin(true),
    //         console.log(login),
    //         window.location.href = "/"
            // localStorage.setItem("UserName", ));
  //)
}
  return (
    <>
      <p>login Form temp</p>
      <form onSubmit={HandleSubmit} className="login">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
          autoComplete="current-username"
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          autoComplete="current-password"
        ></input>
        <input type="submit"/>
      </form>
      <br></br>
    </>
  );
}
export default LoginForm;
