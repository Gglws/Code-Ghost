import React from 'react';


function Form() {
    function HandleSubmit() {
        console.log('apple');
        console.log(description);
    }
    return (
        <form onSubmit={HandleSubmit}>
        <input type="text" placeholder='Name' value={description}></input>
        <input type="email" placeholder='Email' value={description}></input>
        <button/>
    </form>
    );
}

export default Form;