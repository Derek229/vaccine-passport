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

  useEffect(() => {
    getSubmissions()
  },[])

  const getSubmissions = async () => {
    //update :id of 1 in url to be variable for user accessing page
    let res = await axios.get(`/api/users/1/vaccines`) 
    setUnverifSubmissions(res.data)
  }

  const renderSubmissions = () => {
    //generate list of vaccines
    return unverifSubmissions.map( submission => {
      return(
        <div key={submission.id}>
          <Card style={{ width: '100%' }} >
            <Card.Body>
              <Card.Title><h3>Submitted by, user id: {submission.user_id}</h3></Card.Title>
              <Card.Text>
              verified status: {submission.verified}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Vacc name: {submission.name}</ListGroupItem>
              <ListGroupItem>Manufacturer: {submission.manufacturer}</ListGroupItem>
            </ListGroup>
          </Card>
        </div>
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
