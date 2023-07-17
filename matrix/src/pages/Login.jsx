
import './login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Login extends React.Component{
    render(){
        return(
            <>
            <Navbar/>
            <br /> <br />
  
    <div className="Bb">
    <div className="L">
      
    </div>
    <div className="R">
      <h5>Rel-Event</h5>
     
      <div className="inputs">
        <input type="text" placeholder="User Name" />
        <br />
        <input type="password" placeholder="Password" />
      </div>
      <div className="R">
       
      </div>
      <br />
      <p>Don't have an account?
       <a><Link to="/Signup">Create your account</Link></a> 
         
         </p>
      <button><Link to="/Profile">Login</Link></button>
    </div>
  </div>
  <br /> <br />
  <div className="l" align="center" >
    <br /> <br />
    REL-EVENT MANAGEMENT, JUIT, WAKHNAGHAT, DISTRICT SOLAN, HIMACHAL PRADESH     <br />    
    
      INFO@RELEVENT.COM  <br /> <br /> <br />

 </div>

  </>
        );
    }
}

export default Login;