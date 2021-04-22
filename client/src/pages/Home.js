import React, {useContext, useEffect, useState} from 'react'
import Login from '../components/Login'
import {Link} from 'react-router-dom'
import UserDashboard from '../pages/user/UserDashboard';
import IssuerVaccines from '../pages/issuer/IssuerVaccines';
import VerifierHomePage from '../pages/verifier/VerifierHomePage'
import { AuthContext } from '../providers/AuthProvider';
import AdminVaccines from '../pages/Admin/AdminVaccines'

const Home = () => {

	const auth = useContext(AuthContext)

  if(auth?.user){
    if (auth.user.role === 'user'){
    return(
        <UserDashboard />
    )}
    else if (auth.user.role === 'issuer'){
      return(
        <IssuerVaccines/>
    )}
    else if (auth.user.role === 'verifier'){
        return(
          <VerifierHomePage/>
    )}
    else if (auth.user.role === 'admin'){
      return(
        <AdminVaccines/>
    )}

  }else {
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
    )
  }
}

export default Home