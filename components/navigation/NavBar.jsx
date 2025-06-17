import React from 'react'
import Link from 'next/link';

const NavBar = () => {
  return (
    <>
    <div>
        <Link href="/">Home</Link> |{" "}
        <Link href="/Login">Login</Link> |{" "}
        <Link href="/signup">Sign Up</Link>
      </div>
    </>
  )
}

export default NavBar