import React from 'react'
import SearchIcon from '../Assets/Search.svg'

import './NavBar.css'
function NavBar() {
  return (
    <div>
      <header>
        <div className="searchBox">
          <img src={SearchIcon} alt="" />
          <input className='searchInput' type="text" />
        </div>
        <p className='NavOptions'>Categories</p>
        <p className='NavOptions'>Website Builders</p>
        <p className='NavOptions'>Today's deals</p>
      </header>
    </div>
  )
}

export default NavBar