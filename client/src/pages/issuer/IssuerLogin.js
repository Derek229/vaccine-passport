import React from 'react'
import Login from "../../components/Login"
import { Link } from 'react-router-dom'

const IssuerLogin =()=> {
  return (
   
    <div>
      <h1>Issuer </h1>
      <Login/>
      <Link to= '/'>Return to Login</Link>
    </div>
  )
}
export default IssuerLogin
