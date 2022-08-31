import React, { useState } from 'react';
import axios from 'axios';


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
            url: "http://localhost:5003/api/userAccounts",
            method: "POST",
            data: { email, password, fullName, company },
          }).then(
              console.log('signed up')
          );
    }
    return (
        <form onSubmit={HandleSubmit} className="registration">
        <input type="email" placeholder='Email' value={email} onChange={updateEmail}></input>
        <input type="password" placeholder='Password' value={password} onChange={updatePassword}></input>
        <input type="text" placeholder='Full Name' value={fullName} onChange={updateFullName}></input>
        <input type="text" placeholder='Company' value={company} onChange={updateCompany}></input>
        <button>Submit</button>
    </form>
    );
}
// autoComplete="current-username" might be email instead of username idk yet
// autoComplete="current-password" 


export default Form;