import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


const Signupform = (props) => {

  const [psswrd, setPsswrd] = useState("");

  const [name, setName] = useState("User");


  const [email, setEmail] = useState("");


  function registerUser(e) {
    e.preventDefault();
    const data = {
      name: name, // include name in the request
      email: email,
      password: psswrd
    };

    axios.post("http://localhost:8888/signup", data);
  }

  return (
    <>
      <div>
        <h1 align="center">Hello {name}</h1>
      </div>
      <br></br>

      <form onSubmit={(e) => { registerUser(e) }}>

      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name" />
      </div>
      <br></br>
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
      <div>
        <p>Already a user? <a href='/Login'>Login</a></p>
      </div>
      </form>
    </>
  );
}

export default Signupform