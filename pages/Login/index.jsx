import Loginform from '@/components/form/Loginform'
import NavBar from '@/components/navigation/NavBar'
import Head from 'next/head'
import React from 'react'

const Login = () => {
  return (
    <>
    <Head>
        <title>Login | Todo App</title>
        <meta name="Login page" content="Simple Login page for user authentication" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <NavBar />
    <Loginform />

    </>
  )
}

export default Login