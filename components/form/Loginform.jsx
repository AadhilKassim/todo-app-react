import React from 'react'

const Loginform = (props) => {
  
  console.log(props)
    return (
    <>
        <h1>Login Form</h1>
        <p> {props.userName}  {props.userPss}</p>
    </>
  )
}

export default Loginform