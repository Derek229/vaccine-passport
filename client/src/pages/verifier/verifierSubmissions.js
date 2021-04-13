import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

//TODO: render submissions that need to be verified
//provide boolean changer for verifier to verify/deny submissions
//determine if we should render previously verified submissions too
//add route for this page to app.js
//determine how to show this route to only users with role 'verifier'

const VerifierSubmissions = () => {


  //create useEffect to render submissions on component mount
  const [unverifSubmissions, setUnverifSubmissions] = useState([])

  // useEffect(() => {
  //   getSubmissions()
  // },[])


  return (
    <>
    <div>
      <h1>configure page for verifier to scan QR and pull up user's vaccines</h1>
    </div>
    </>
  )
}

export default VerifierSubmissions
