import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'

//TODO: render submissions that need to be verified
//provide boolean changer for verifier to verify/deny submissions
//determine if we should render previously verified submissions too
//add route for this page to app.js
//determine how to show this route to only users with role 'verifier'



const verifierSubmissions = () => {


  //create useEffect to render submissions on component mount
  const [unverifSubmissions, setUnverifSubmissions] = useState([])

  const getUnverifiedSubmissions = async () => {
    //make call to get unverified submissions
    //set array submissions = response
  }

  const renderSubmissions = () => {
    //TODO: map through unverifSubmissions and create card(?) for each

    return(
      <>
      <Card>
        <h1>unverified submission here</h1>
      </Card>
      
      </>
    )
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

export default verifierSubmissions
