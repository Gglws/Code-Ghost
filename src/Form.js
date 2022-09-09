import React, { useState } from "react";
import axios from "axios";

function Form() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePassword = (event) => {
    setPassword(event.target.value);
  };
  const updateFullName = (event) => {
    setFullName(event.target.value);
  };
  const updateCompany = (event) => {
    setCompany(event.target.value);
  };
  function HandleSubmit(e) {
    e.preventDefault();
    axios({
      url: "/api/userAccounts", //this needs to be replaced in production
      method: "POST",
      data: { email, password, fullName, company },
      headers: {
        'Content-Type': 'application/json',
    },
    }).then(
      console.log("signed up"),
      setEmail(""),
      setCompany(""),
      setPassword(""),
      setFullName("")
    );
  }
  return (
    <>
      <form onSubmit={HandleSubmit} className="registration">
      <div>New user? Sign up!</div>
        <input className="signupI"
          type="email"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        ></input>
        <input className="signupI"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        ></input>
        <input className="signupI"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={updateFullName}
        ></input>
        <input className="signupI"
          type="text"
          placeholder="Company"
          value={company}
          onChange={updateCompany}
        ></input>
        <input className="subB" type="submit"/>
      </form>
      <br></br>
    </>

  );
}
export default Form;