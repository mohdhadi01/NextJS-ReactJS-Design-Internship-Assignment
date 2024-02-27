import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
      <footer>
        <div className="categoriesSection">
          <p className='footerTitle'>CATEGORIES</p>
          <p>Web Builder</p>
          <p>Hosting</p>
          <p> Data Center</p>
          <p>Robotic-Automation</p>
        </div>
        <div className="categoriesSection">
          <p className='footerTitle'>CONTACT</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
          <p>Terms Of Service</p>
          <p>Categories</p>
          <p>About</p>
        </div>
        <div className="categoriesSection">
          <select className='countryOption' name="Country" id="">
            <option value="United States">United States</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="Qatar">Qatar</option>
            <option value="Russia">Russia</option>
          </select>
        </div>
      </footer>
    </div>
  )
}

export default Footer