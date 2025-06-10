import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
     <>
    <Head>
        <title>Dashboard</title>
        <meta name="description" content="User dashboard for managing tasks and projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard!</p>
    </div>
     </>
  )
}

export default index