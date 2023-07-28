import './login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const Login = () => {
  const [enrollmentno, setEnrollmentno] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://juit-webkiosk-api.onrender.com/v1.0/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ enrollmentno, password }),
      });
      console.log("API Response:", response); 

      if (response.ok) {
        const data = await response.json();
        console.log("API Data:", data); 
        setResponseMessage(`Welcome, ${data.credentials}!`);
      } else {
        setErrorMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <br /> <br />
      <div className="Bb">
        <div className="L"></div>
        <div className="R">
          <h5>Rel-Event</h5>
          <div className="inputs">
            <input type="number" placeholder="Enrollment No" value={enrollmentno} onChange={(e) => setEnrollmentno(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="R"></div>
          <br />
          <p>
            Don't have an account? <Link to="/Signup">Create your account</Link>
          </p>
          <button onClick={handleLogin}>Login</button>
          {errorMessage && <p>{errorMessage}</p>}
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
      <br /> <br />
      <div className="l" align="center">
        <br /> <br />
        REL-EVENT MANAGEMENT, JUIT, WAKHNAGHAT, DISTRICT SOLAN, HIMACHAL PRADESH <br />
        INFO@RELEVENT.COM <br /> <br /> <br />
      </div>
    </>
  );
};

export default Login;

