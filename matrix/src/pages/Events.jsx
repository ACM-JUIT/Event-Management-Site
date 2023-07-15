import React from 'react'
import "./style.css";
import Navbar from './Navbar';
import {Link } from 'react-router-dom';
import Addevents from './Addevents';


const Events = () =>{ 
    
  return (
       <>
    <Navbar/>
    <br />
    <img src="https://images.unsplash.com/photo-1522836924445-4478bdeb860c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"  height="500px" width="1520px"/>
    <div className="imgtext">
      <p align="right"><b>Event planning is our passion!!</b>
      </p>
      </div>
      <br />
    
    <h1 align="center">Wow, we've had a busy year... but always make time for fun!  </h1>
    <p className="hello">
          Immerse yourself in the vibrant energy of our carefully curated events. Our team of passionate organizers works tirelessly to bring you a diverse range of gatherings that celebrate art, culture, technology, and much more. With our commitment to quality, you can expect exceptional experiences that leave lasting impressions.</p>
  <p className="okay" > <b> Events bring people together. Events foster connections. Events create memorable experiences</b></p>
 
  <img src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" height="500px" width="1520px" />
  <div className="imgtext2" align="center">
    <p> <b>We do not remember days; We remember moments.</b></p>

  </div>
 
  <h1 align="center">ONGOING EVENTS:</h1>
  <section className="container">
  <div className="carda">
    <div className="card-image card1"></div>
    <h2 align="center"> QRIOSITY 3.O</h2>
  <p className="y">Qriosity 3.O,a one of it's kind quizzing contest where students were tested by witty questions,particularly from tech domain.
It was a 6-hour long online quiz competition and was a race against time in which you had to win by wielding your abilities to think out of the box.
  </p>
</div>

  <div className="cardb">
    <div className="card-image card2"></div>
    
    <h2 align="center"> HACHE 3.O</h2>
  <p className="y">ACM-JUIT along with Rel-event presented an online global event Hache 3.O to get along with the thrilling journey of Capturing the flag(CTF). It was a 24 hour long online CTF event where participants were presented with various quests that they had to solve with hints,challenging them to juggle their minds and think creatively.</p>
</div>

<div className="cardc">
  <div className="card-image card3"></div>
  
  <h2 align="center">Semicolon</h2>
<p className="y">ACM-JUIT along with Rel-event presented JUIT's biggest coding event Semicolon open to all. Semicolon is radically designed to test problem solving abilities along with basic mathematics, Data structures and Algorithms.</p>
</div>
</section>
<br /> <br />

<div className="button">
    <br />
  

<h1 align="CENTER">WANT TO ADD YOUR OWN EVENT?</h1>
<button className="j"><Link to="/addevents">+ ADD EVENT</Link></button>
</div>
<br /> <br /> <br /> <br />


  
<div className="l" align="center" >
    <br /> <br />
    REL-EVENT MANAGEMENT, JUIT, WAKHNAGHAT, DISTRICT SOLAN, HIMACHAL PRADESH     <br />    
    
      INFO@RELEVENT.COM  <br /> <br /> <br />

 </div>
 </>
 
      
);

}

export default Events
