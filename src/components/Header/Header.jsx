import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

import logo from '/public/nba-logo.png'

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Link className='logo' to={'/'}><img src={logo} alt="" /></Link>
          <Link className='nav-link' to={'/top'}>Top Players</Link>
          <Link className='nav-link' to={'/teams'}>Teams</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header