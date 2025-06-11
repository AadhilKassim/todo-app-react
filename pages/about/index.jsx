import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useState } from "react";
import Loginform from "@/components/form/Loginform";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

 const [psswrd, setPsswrd] = useState("NULL");
  console.log("State:", psswrd);

  const [name, setName] = useState("Aadhil");
  console.log("Name:", name);
  const [email, setEmail] = useState("");
  console.log("Email:", email);
  useEffect(() => {
    //Mounting the component
    return () => {
      //Unmountig
    }
  },[/*Dependencies*/])

  return (
    <>
      <div className={styles.container}>
        <h1 align="center">Hello {name}</h1>
      </div>
      <br></br>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name" /></div>
      {/* <div>
          <input
        type="email"
        onChang e={(e) => setEmail(e.target.value)}
        placeholder="Enter your email" />
        </div> */}
      <br></br>
      <div className={styles.container}>
        <input
          type="password"
          onChange={(e) => setPsswrd(e.target.value)}
          placeholder="Enter Password" />
      </div>
      <button onClick={() => { if (psswrd.length < 8) {
        alert("Password must be at least 8 characters long");
      }else {
        alert(`Welcome ${name}, your password is ${psswrd}`);
      }}}>Sign Up</button>

      <Loginform  userName = {name} userPss = {psswrd}/>
    </>
  );
}
