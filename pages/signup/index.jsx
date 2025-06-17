import Signupform from '@/components/form/Signupform'
import Head from 'next/head'
import React from 'react'

const signup = () => {
    return (
        <>
            <Head>
                <title>Sign Up | Todo App</title>
                <meta name="Sign Up page" content="Simple Sign Up page for user registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Signupform />
        </>
    )
}

export default signup