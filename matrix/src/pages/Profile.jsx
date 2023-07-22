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
                  
                
                  <p className="hey78"> <b className="lol"> Username-&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="Burk#abcuiuio123" /></p>
                  <p className="hey78"> <b className="lol"> First Name-&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="Burk" /></p>
                  <p className="hey78"> <b className="lol"> Last Name-&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="Macklin" /></p>
                  <p className="hey78"> <b className="lol"> Father's Name-&nbsp;</b>&nbsp;&nbsp;<input type="text" placeholder="Mr.John Macklin" /></p>
                  <p className="hey78"> <b className="lol"> Roll no.-&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" placeholder="2210XXXXX" /></p>
                  <p className="hey78"> <b className="lol"> Course-&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="B.Tech." /></p>
                  <p className="hey78"> <b className="lol"> Branch-&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="Computer Science" /></p>
                  <p className="hey78"> <b className="lol"> Semester-&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" placeholder="3rd" /></p>
                  <p className="hey78"> <b className="lol"> E-mail-&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="e-mail" placeholder="abc@gmail.com" /></p>
                  <p className="hey78"> <b className="lol"> Phone No.-&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" placeholder="12345XXXXX" /></p>
                  
                </a>
              </soya>
            </div>
          </div>
          <div className="aloo">
            <br />
            <h1 class="imp">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Events</h1>
            <section className="container23">
              <div className="cardx">
                <div className="card-image card5" />
                <h1 align="center">GAMING NIGHT</h1>
              
                <p><b>&nbsp;&nbsp;DATE:</b><e class="smile">8th July-10th July</e></p>
                <p><b>&nbsp;&nbsp;TIME:</b><e class="smile">10:00pm-12.00am</e></p>
                <p><b>&nbsp;&nbsp;NO. OF REGISTRATIONS:</b><e class="se">114</e></p>
                <p><b>&nbsp;&nbsp;CHECK-INS:</b><e class="si">102</e></p>
                <p><b>&nbsp;&nbsp;AMOUNT PER PERSON:</b><e class="smi">₹60</e></p>
                <p><b>&nbsp;&nbsp;COLLECTED AMOUNT:</b><e class="smi">&nbsp;₹6800</e></p>
                <p><b>&nbsp;&nbsp;NO. OF FEEDBACKS:</b><e class="s">71</e></p>
                <p><b>&nbsp;&nbsp;MOST PARTICIPATION:</b><e class="sm">XYZ GAME</e></p>
                <p><b>&nbsp;&nbsp;LEAST PARTICIPATION:</b><e class="sm">ABC GAME</e></p>
                
              </div>
            </section></div>
        </div>
        <br /> <div className="l" align="center" >
    <br /> <br />
    REL-EVENT MANAGEMENT, JUIT, WAKHNAGHAT, DISTRICT SOLAN, HIMACHAL PRADESH     <br />   
    INFO@RELEVENT.COM  
    
       <br /> <br /> <br />

 </div>



        </>


            );
    }
}

export default Profile;