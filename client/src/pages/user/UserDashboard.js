import React, {useState, useEffect, useContext} from 'react'
import {CardGroup, Card, ListGroup, ListGroupItem, Container, Row, Col, Button} from 'react-bootstrap'
import axios from 'axios'
import {AuthContext} from '../../providers/AuthProvider'
import {useHistory} from 'react-router-dom'

//TODO: render user info, link to wallet, CRUD action options for user

const UserDashboard = (props) => {
  
  const auth = useContext(AuthContext)

  const history = useHistory()
  
  const [user, setUser] = useState([])
  const [vaccines, setVaccines] = useState([])

  useEffect(()=>{
    getVaccines()
    getUserData()
  },[])
  
  
  const getUserData = async () => {
    //get user info
    let res = await axios.get(`/api/users/${auth.user.id}`)
    setUser(res.data)

    //setUser(res.data) --check to make sure this is right w/ console.log() once backend is setup
  }

  const getVaccines = async () => {
    //TODO: change 1 in URL below to string interpolate userID once users controller is setup
    let res = await axios.get(`/api/users/1/vaccines`)
    setVaccines(res.data)

  }

  const renderUser = () => {
    //generate user profile information (maybe use a card?)
    return(
      <>
       <Card >
         <Card.Body>
           <Card.Title><h4>{user.first_name} {user.last_name}</h4></Card.Title>
           <Card.Text>
            User Details:
           </Card.Text>
         </Card.Body>
         <ListGroup className="list-group-flush">
           <ListGroupItem>Email: {user.email}</ListGroupItem>
         </ListGroup>
         <Card.Body>
           <Card.Link href="#"><Button className="btn btn-info">Edit User Details</Button></Card.Link>
         </Card.Body>
       </Card>
      </>
    )
  }

  const renderVaccines = () => {
    //generate list of vaccine choices
    return vaccines.map( vaccine => {
      return(
        <div key={vaccine.id}>
        <Card >
          <Card.Body>
            <Card.Title><h4>Vaccine Name: {vaccine.name}</h4></Card.Title>
            <Card.Text>
              Manufacturer: {vaccine.manufacturer}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>verified status: {vaccine.verified}</ListGroupItem>
          </ListGroup>
        </Card>
        </div>
      )
    })
  }

  return (
    <>
    <div>
      <h1>User Dashboard</h1>
      {renderUser()}
      <h2>Available Vaccines: </h2>
      <CardGroup >
        {renderVaccines()}
      </CardGroup>
    </div>
    </>
  )
}

export default UserDashboard
