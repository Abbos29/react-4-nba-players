import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Link className='logo' to={'/'}><img src="https://www.edigitalagency.com.au/wp-content/uploads/NBA-logo-png.png" alt="" /></Link>
          <Link className='nav-link' to={'/top'}>Top Players</Link>
          <Link className='nav-link' to={'/teams'}>Teams</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header