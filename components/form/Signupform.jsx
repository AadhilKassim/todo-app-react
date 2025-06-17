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

    axios.post("https://node-next-five.vercel.app/signup", data).then((response) => {

    });
  }

  function handlePassword(psswrd) {
    if (psswrd === "") {
      alert("Please fill in the password");
    } else if (psswrd.length < 8) {
      alert("Password must be at least 8 characters long");
    }else {
      alert(`Welcome ${name}, you have successfully signed up!`);
    }
  }

  return (
    <>
      <div>
        <h1 align="center">Hello {name}</h1>
      </div>
      <br></br>

      <form onSubmit={(e) => { registerUser(e) }}>

        <div align="center">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name" />
          <br></br>
          <br />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" />
          <br></br>
          <br />
          <input
            type="password"
            onChange={(e) => setPsswrd(e.target.value)}
            placeholder="Enter Password" />
          <br />
          <br/>
          <button class = 'Submit' type='Submit' onClick={(psswrd) => {
            handlePassword(psswrd);
          }}>Sign Up</button>
        </div>
      </form>
      <br/>
        <div>
          <p>Already a user? <a href='/Login'>Login</a></p>
        </div>
    </>
  );
}

export default Signupform