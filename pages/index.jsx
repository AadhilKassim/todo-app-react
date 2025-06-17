import Head from "next/head";
import React from "react";
import Link from "next/link";
import NavBar from "@/components/navigation/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page | Todo App</title>
        <meta name="Home page" content="Simple No login page for user browsing" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
    </>
  );
}