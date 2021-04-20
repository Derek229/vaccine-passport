import React, {useEffect, useState} from 'react'
import Login from '../components/Login'
import {Link} from 'react-router-dom'
import UserDashboard from '../pages/user/UserDashboard';
import IssuerVaccines from '../pages/issuer/IssuerVaccines';
import VerifierHomePage from '../pages/verifier/VerifierHomePage'

const Home = (props) => {

	const user = props

if (user.role === 'user'){
return(
    <UserDashboard />
)}
else if (user.role === 'issuer'){
  return(
    <IssuerVaccines/>
  )}
  else if (user.role === 'verifier'){
    return(
      <VerifierHomePage/>
    )}

  else {
  return (
    <div>
        <Login/>
        <Link to="/issuerLogin">
    Click here to login or register your company
  </Link>
  <div>
  <Link to='/verifierLogin'>Country origin access</Link>
  </div>
    </div>
  )}
  }

export default Home