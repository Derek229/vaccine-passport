import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'

//TODO: render submissions that need to be verified
//provide boolean changer for verifier to verify/deny submissions
//determine if we should render previously verified submissions too
//add route for this page to app.js
//determine how to show this route to only users with role 'verifier'



const VerifierSubmissions = () => {


  //create useEffect to render submissions on component mount
  const [unverifSubmissions, setUnverifSubmissions] = useState([])

  useEffect(() => {
    getSubmissions()
  },[])

  const getSubmissions = async () => {
    //update :id of 1 in url to be variable for user accessing page
    let res = await axios.get(`/api/users/1/vaccines`) 
    setUnverifSubmissions(res.data)
    console.log(res.data)
  }

  const renderSubmissions = () => {
    //generate list of vaccines
    return unverifSubmissions.map( submission => {
      return(
        <>
        <div>
          <Card>
          <h1>Submitted by, user id: {submission.user_id}</h1>
          <h2>Vacc name: {submission.name}</h2>
          <h2>Manufacturer: {submission.manufacturer}</h2>
          <h3>verified status: {submission.verified}</h3>
          </Card>
        </div>
        </>
      )
    })
  }


  return (
    <>
    <div>
      <h1>render submission for verifier to verify</h1>
      {renderSubmissions()}
    </div>
    </>
  )
}

export default VerifierSubmissions
