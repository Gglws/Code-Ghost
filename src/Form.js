import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function Form() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [signup, setSignup] = useState(false);
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
      url: "/api/userAccounts",
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
      setFullName(""),
      alert('You\'ve signed up')
    );
  }
  return (
    <>
    {signup ? (
      <form onSubmit={HandleSubmit} className="registration">
      <div>New user? Sign up!</div>
        <input className="signupI"
          type="email"
          placeholder="Email"
          value={email}
          onChange={updateEmail} 
          className="registration"
          required
        ></input>
        <input className="signupI"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          required
        ></input>
        <input className="signupI"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={updateFullName}
          required
        ></input>
        <input className="signupI"
          type="text"
          placeholder="Company"
          value={company}
          onChange={updateCompany}
        ></input>
        <input className="subB" type="submit"/>
      </form>
  //  <div>
  //  <h1>Don't have an account? click here to sign up!</h1>
  //  <button onClick={setSignup(true)}></button>
  //  </div>
    ) : (
      <div className="registration">
      <h4>Don't have an account? Click below to get started!</h4>
      <button className="signupbtn" onClick={() => setSignup(true)}>Sign up</button>
      </div>
    )}
    </>
  );
}
export default Form;