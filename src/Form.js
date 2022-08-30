import React from 'react';

function HandleSubmit() {
    console.log('apple');
}

function Form() {
    return (
        <form onSubmit={HandleSubmit}>
        <input type="text" placeholder='Name' ></input>
        <input type="email" placeholder='Email' ></input>
        <button/>
    </form>
    );
}

export default Form;