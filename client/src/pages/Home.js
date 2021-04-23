import React, {useContext} from 'react'
import Login from '../components/Login'
import {Link} from 'react-router-dom'
import VerifierHomePage from '../pages/verifier/VerifierHomePage'
import { AuthContext } from '../providers/AuthProvider';
import UserHomePage from './user/UserHomePage';
import IssuerHomePage from './issuer/IssuerHomePage';
import AdminHomePage from './Admin/AdminHomePage';
import LandingPage from '../components/LandingPage';

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
        <LandingPage/>
      </div>
    )
  }
}

export default Home