import './Signup.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

class Signup extends React.Component{
    render(){
        return(
            <>
            <Navbar/>
            <br /> <br />
            <div className="box">
            <div className="noi">
           
            </div>
            <div className="koi">
              <h5>Rel-Event</h5>
              <h1 align='center'>Signup</h1>
              
                           <div className="inputs">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Username" />
                <input type="number" placeholder="Roll no." />
                <input type="number" placeholder="Mobile number" />
                <input type="E-mail" placeholder="E-mail" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="R">
               
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <button><Link to="/Events">Sign-up</Link></button>
              </div>
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
export default Signup;
