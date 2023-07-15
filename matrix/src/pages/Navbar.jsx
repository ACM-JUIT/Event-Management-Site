import React from 'react'
import "./style.css";
import { NavLink } from "react-router-dom";


const navbar = () => {
  return (
    <>
    
      <div className='he12' align='right'>
      <div ><img src='https://zenprospect-production.s3.amazonaws.com/uploads/pictures/63cdf4b1faaf18000190a9df/picture' width="70px" height="100%"className='logo'></img></div>
        &nbsp; &nbsp; &nbsp;
         <button className="nav"><NavLink to="/" exact activeClassName="hey" >HOME</NavLink></button>&nbsp; &nbsp; &nbsp;
         <button className="nav"><NavLink to = "/events" exact activeClassName="hey">EVENTS</NavLink></button>
        &nbsp; &nbsp; &nbsp;
        <button className="nav"><NavLink to = "/services" exact activeClassName="hey">SERVICES</NavLink></button>
        &nbsp; &nbsp; &nbsp;
        <button className="nav"><NavLink to = "/login" exact activeClassName="hey">LOGIN</NavLink></button>
        &nbsp; &nbsp; &nbsp; 
        <button className="nav"> <NavLink to = "/profile" exact activeClassName="hey">PROFILE</NavLink></button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
        
        
        
      
      
    </>
  )
}

export default navbar
