import React, {useContext, useEffect, useState} from 'react'
import Login from '../components/Login'
import {Link} from 'react-router-dom'
import VerifierHomePage from '../pages/verifier/VerifierHomePage'
import { AuthContext } from '../providers/AuthProvider';
import UserHomePage from './user/UserHomePage';
import IssuerHomePage from './issuer/IssuerHomePage';
import AdminHomePage from './Admin/AdminHomePage';

const Home = () => {

	const auth = useContext(AuthContext)

  if(auth?.user){
    if (auth.user.role === 'user'){
    return(
        <UserHomePage/>
    )}
    else if (auth.user.role === 'issuer'){
      return(
        <IssuerHomePage/>
    )}
    else if (auth.user.role === 'verifier'){
        return(
          <VerifierHomePage/>
    )}
    else if (auth.user.role === 'admin'){
      return(
        <AdminHomePage/>
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