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
  const [wallet, setWallet] = useState([])

  useEffect(()=>{
    getWallet()
    getUserData()
  },[])
  
  
  const getUserData = async () => {
    //get user info
    let res = await axios.get(`/api/users/${auth.user.id}`)
    setUser(res.data)

    //setUser(res.data) --check to make sure this is right w/ console.log() once backend is setup
  }

  const getWallet = async () => {
    //TODO: change 1 in URL below to string interpolate userID once users controller is setup
    let res = await axios.get(`/api/users/${auth.user.id}/vaccination_wallets`)
    setWallet(res.data)

  }

  const renderUser = () => {
    //generate user profile information (maybe use a card?)
    return(
      <>
       <Card >
         <Card.Body>
           <Card.Title><h4>{user.first_name} {user.last_name}</h4></Card.Title>
           <Card.Text>
            User Details (ID): {user.id}
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
    return wallet.map( vaccine => {
      return(
        <div key={vaccine.vaccine_id}>
          <Card >
            <Card.Body>
              <Card.Title><h3>Vaccination: {vaccine.vaccine_name}</h3></Card.Title>
              <Card.Text>
                MFG: {vaccine.manufacturer}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )
    })
  }

  return (
    <>
    <div>
      <Container>
      <h1>User Dashboard</h1>
      {renderUser()}
      </Container>
      <Container>
      <h2>My Vaccines: </h2>
      <CardGroup >
        {renderVaccines()}
      </CardGroup>
      </Container>
    </div>
    </>
  )
}

export default UserDashboard
