//navbar on the top right for extra function

import React, {useState} from "react";
// import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick =() => {
        setClick(!click)
        // alert('Not ready yet');
    };
    
    return (
        <>
            <nav className='navbar'>
                <div className='menu-icon' onClick={handleClick}>
                    <span className='material-symbols-outlined'>{click ? 'menu' : 'close'}</span>
                </div>
            </nav>
        </>
    )
}

export default Navbar