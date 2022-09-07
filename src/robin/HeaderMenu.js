import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderMenu.css'

function HeaderMenu() {
  return (
    <div className='page-nav-container'>
      <div className='page-nav-btn'>
        <div>
          <Link to='/' className='nav-btn-login'>HOME</Link>
        </div>
        <div>
          <Link to='/about' className='nav-btn-about'>ABOUT</Link>
        </div>
        <div>
          <Link to='/login' className='nav-btn-login'>LOGIN</Link>
        </div>
      </div>

    </div>
  )
}

export default HeaderMenu