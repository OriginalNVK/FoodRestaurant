import React, {useState} from 'react'
import './Navbar.css'
import {assets} from "../../assets/frontend_assets/assets.js"

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo web" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu==="home"? "active": ""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu==="menu"? "active": ""}>menu</li>
        <li onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"? "active": ""}>mobile-app</li>
        <li onClick={() => setMenu("contack-us")} className={menu==="contack-us"? "active": ""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="basket icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar