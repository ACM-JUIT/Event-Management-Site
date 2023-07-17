import React from 'react'
import "./style.css";
import { NavLink } from "react-router-dom";


const navbar = () => {
  return (
    <>
        
        <nav>
          <div><img src="data:image/png;base64,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"  height="50px" width="100px"/></div>
          <div>
            <ul id='navbar'>
              <li><NavLink to="/" exact activeclassName="active"><a>HOME</a></NavLink></li>
              <li><NavLink to="/events">EVENTS</NavLink></li>
              <li><NavLink to="/services">SERVICES</NavLink></li>
              <li><NavLink to="/login">LOGIN</NavLink></li>
              <li><NavLink to="/profile">PROFILE</NavLink></li>
            </ul>
          </div>
        </nav>
        
      
      
    </>
  )
}

export default navbar
