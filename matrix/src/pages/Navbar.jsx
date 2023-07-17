import React from 'react'
import "./style.css";
import { NavLink } from "react-router-dom";


const navbar = () => {
  return (
    <>
        
        <nav>
          <div><img src="https://yt3.googleusercontent.com/i029KiwZu6fBVs9TKufyKu6ye0xFJ0zsXCQ_00oe6NOKW4ws_8cWoNPVuawfsKahFnjZM60B4A=s900-c-k-c0x00ffffff-no-rj"  height="80px" width="150px"/></div>
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
