import React from 'react'
import "./style.css";
import  logo from "./trans.png";
import { NavLink } from "react-router-dom";


const navbar = () => {
  return (
    <>
        
        <nav>
          <div><img src={logo} alt='logo' height="25px" width="230px"/></div>
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
