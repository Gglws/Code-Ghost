import React from 'react';

function HandleSubmit() {
    console.log('apple');
}

function Form() {
  return (
    <div className="login">
      <form onSubmit={HandleSubmit}>
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="Email"></input>
        <button />
      </form>
    </div>
  );
}

export default Form;