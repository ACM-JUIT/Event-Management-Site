import React from 'react'
import "./Servicestle.css";
import Navbar from './Navbar';


const Services = (props) => {
  return (
    <>
    <Navbar/>
  
 
  <div id="about">
    <p>
      REL-EVENT is a diverse team offering expert knowledge in their field.
      <br />
      From strategy planning, budgeting,and comprehensive registration <br />
      support to marketing and branding we bring the most current, <br />
      innovative and professional market expertise.
    </p>
  </div>
  <hr />
  <div id="about-info">
    <center>
      <p>
        " REL-EVENT is an incredibly talented, professional and industry
        leading event management ".
        <br />

        <bi>'DESIGN'</bi> and <bi>'PRODUCE'</bi> 
      </p>
    </center>
  </div>
  <hr />


  <section class="containerser">
    <div class="cardaser">
      <div class="card-imageser card1ser"></div>
      <h2 align="center">Venue selection and booking</h2>
      <p class="yser">
        Finding the right venue for your event is essential, and event
        management services can help you with this. They can assess your needs
        and budget, and then provide you with a list of potential venues that
        meet your criteria.
      </p>
    </div>

    <div class="cardbser">
      <div class="card-imageser card2ser"></div>

      <h2 align="center">Budgeting and financing</h2>
      <p class="yser">
        Event planners need to carefully manage their finances throughout the
        event planning process. This includes tracking expenses, monitoring
        cash flow, and making sure that they stay on budget.
      </p>
    </div>

    <div class="cardcser">
      <div class="card-imageser card3ser"></div>

      <h2 align="center">Logistics</h2>
      <p class="yser">
        Event management services can handle all the logistics of your event,
        from setting up the venue to managing the guest list. They can also
        help you with marketing and promotion,
      </p>
    </div>
  </section>
  <section class="containerser">
    <div class="cardd">
      <div class="card-imageser card4"></div>
      <h2 align="center">Marketing and promotion</h2>
      <p class="yser">
        use of creative marketing materials and engaging promotional
        campaigns, event planners can help to generate excitement about the
        event and encourage people to attend.
      </p>
    </div>

    <div class="carde">
      <div class="card-imageser card5"></div>

      <h2 align="center">Event execution</h2>
      <p class="yser">
        This includes tasks such as venue selection, catering, entertainment,
        and logistics. The goal of execution is to ensure that the event runs
        smoothly and that the attendees have a positive experience.
      </p>
    </div>

    <div class="cardf">
      <div class="card-imageser card6"></div>

      <h2 align="center">Entertainment coordination</h2>
      <p class="yser">
        If you're planning an event with entertainment, event management
        services can help you book the right performers. They can also help
        you with sound and lighting, and they can make sure that the
        performers are set up .
      </p>
    </div>
  </section>

  <div className="l" align="center" >
    <br /> <br />
    REL-EVENT MANAGEMENT, JUIT, WAKHNAGHAT, DISTRICT SOLAN, HIMACHAL PRADESH     <br />    
    
      INFO@RELEVENT.COM  <br /> <br /> <br />

 </div>

  </>
  )
}

export default Services