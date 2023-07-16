import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


class Profile extends React.Component{
    render(){
        return(<>
  <Navbar/>
  <br /> <br />
          <div className="Boo">
          <div className="loli">
            <div className="kiru">
              <h1> <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_avatar_people_person_white_tone_icon_159370.png" height="300px" width="300px" image-align="center" /></h1>
              <soya><br />
                <e className="wow">Burk Macklin</e>
                <hr color="black"/>
                <a>
                  
                
                  <p className="hey78"> <b className="lol"> Username-</b><input type="text" placeholder="Username" /></p>
                  <p className="hey78"> <b className="lol"> First Name-</b><input type="text" placeholder="First Name" /></p>
                  <p className="hey78"> <b className="lol"> Last Name-</b><input type="text" placeholder="Last Name" /></p>
                  <p className="hey78"> <b className="lol"> Roll no.-</b><input type="number" placeholder="Roll no." /></p>
                  <p className="hey78"> <b className="lol"> E-mail-</b><input type="e-mail" placeholder="E-mail" /></p>
                  <p className="hey78"> <b className="lol"> Phone No.-</b><input type="number" placeholder="Phone No." /></p>

                 
                </a>
              </soya>
            </div>
          </div>
          <div className="aloo">
            <br />
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Events</h1>
            <section className="container23">
              <div className="cardx">
                <div className="card-image card5" />
                <h1 align="center">GAMING NIGHT</h1>
                <p className="yk">Unleash your inner gamer and join us for an electrifying Gaming Night experience!
                  Calling all gamers!Join us for an exciting night where gamers unite, and friendships
                  are forged amidst an atmosphere buzzing with excitement.
                <p><b>DATE:</b>8th July-10th July</p>
                <p><b>TIME:</b>10:00pm-12.00am</p></p>
                <p />
              </div>
            </section></div>
        </div>
        <br /> <div className="l" align="center" >
    <br /> <br />
    REL-EVENT MANAGEMENT, JUIT, WAKHNAGHAT, DISTRICT SOLAN, HIMACHAL PRADESH     <br />    
    
       <br /> <br /> <br />

 </div>



        </>


            );
    }
}

export default Profile;