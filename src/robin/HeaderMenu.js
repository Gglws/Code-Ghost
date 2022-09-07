import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderMenu.css'

function HeaderMenu() {
  return (
    <div className='page-nav-container'>
      <div className='page-nav-btn'>
        <div>
          <Link to='/about' className='nav-btn-about'>About</Link>
        </div>
        <div>
          <Link to='/login' className='nav-btn-login'>Login</Link>
        </div>
        <div>
          <Link to='/login' className='nav-btn-login'>NEW</Link>
        </div>
        <div>
          <Link to='/login' className='nav-btn-login'>NEW</Link>
        </div>
      </div>

    </div>
  )
}

export default HeaderMenu