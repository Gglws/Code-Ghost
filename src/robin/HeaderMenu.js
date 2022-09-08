import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderMenu.css'

function HeaderMenu() {
  return (
    <div className='page-nav-container'>
      <div className='page-nav-btn'>
          <Link to='/about' className='nav-btn-about'>about</Link>
          <Link to='/login' className='nav-btn-login'>login</Link>
      </div>

    </div>
  )
}

export default HeaderMenu