import React from 'react'
import "./addevents.css"
import Navbar from './Navbar';

const Addevents = () => {
  return (  
    <>
    <Navbar/>
    <div className="event-form">
    <h1 id="heading">POST YOUR EVENT</h1>
    <hr/>
    <label for="event-name">Event Name</label><br/>
    <input type="text" id="event-name" /><br/>
    <label for="event-date">Starting Date</label><br/>
    <input type="date" id="event-date" /><br/>
    <label for="event-date">Ending Date</label><br/>
    <input type="date" id="event-date" /><br/>
    <label for="event-time">Time</label><br/>
    <input type="time" id="event-time" /><br/>
    <label for="event-location">Location</label><br/>
    <input type="text" id="event-location" /><br/>
    <label for="event-description"> Description</label><br/>
    <textarea id="event-description"></textarea><br/>
    <button>Post Event</button>
  </div>

  <h1 id="heading-12">Some of the added events are :</h1>


<section className="cont" align='center'>
    <div className="profilea">
        <div className="profile-image profile1"></div>
        
        <p className="p"><img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" width="20px" height="20px" />    &nbsp;@123user</p>
        <h3 ALIGN="CENTER" className="h">GAMING NIGHT</h3>
        
        <p className="TEXT">DATE:8TH JULY-10TH JULY </p>
     <p className="TEXT">TIME:10PM-12AM</p>
     <br/>
     <br/>
     
    <a href="" className="style">  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; view more &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</a>
    

    </div>

    <div className="profileb">
        <div className="profile-image profile2"></div>
        
        <p className="p"><img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" width="20px" height="20px"  />    &nbsp; @456user</p>
        <h3 ALIGN="CENTER" className="h">HACKATHON</h3>
        
        <p className="TEXT">DATE:12TH JULY 2023</p>
        
        <p className="TEXT">TIME:4PM-12AM</p>
        <br/>
        <br/>
        
        
        <a href="" className="style" >  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; view more &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</a>

    </div>

    <div className="profilec">
        <div className="profile-image profile3"></div>
        
        <p className="p"><img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" width="20px" height="20px" />    &nbsp; @567user</p>
        <h3 ALIGN="CENTER" className="h">OSO</h3>
        
        <p className="TEXT">DATE:15TH JUNE-15TH JULY </p>
        
        <p className="TEXT">TIME:11PM</p>
        <br/>
        <br/>
        
        
        <a href="" className="style"> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; view more &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</a>

    </div>

</section>
<br /> <br />
<div className="l" align="center" >
    <br /> <br />
    REL-EVENT MANAGEMENT, JUIT, WAKHNAGHAT, DISTRICT SOLAN, HIMACHAL PRADESH     <br />    
    
      INFO@RELEVENT.COM  <br /> <br /> <br />

 </div>



 </>
  )
}

export default Addevents