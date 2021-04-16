import React, {useEffect, useState} from 'react'
import Login from '../components/Login'
import {Link} from 'react-router-dom'

const Home = () => {

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

export default Home