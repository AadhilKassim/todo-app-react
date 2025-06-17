import Login from '@/pages/Login';
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';


const Loginform = (props) => {

  const [psswrd, setPsswrd] = useState("");

  const [email, setEmail] = useState("");

  console.log("Email:", email);


  return (
    <>
      <div>
        <h1 align="center">Login</h1>
      </div>
      <form>

      <div>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" />
      </div>
      <br></br>
      <div>
        <input
          type="password"
          onChange={(e) => setPsswrd(e.target.value)}
          placeholder="Enter Password" />
      </div>
      <button type='Submit' onClick={() => {
        if (psswrd.length < 8) {
          alert("Password must be at least 8 characters long");
        } else {
          alert(`Welcome ${name}, you have successfully signed up!`);
        }
      }}>Sign Up</button>
      </form>

    </>
  );
}

export default Loginform