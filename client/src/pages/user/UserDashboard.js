import React, {useState, useEffect, useContext} from 'react'
import {CardGroup, Card, ListGroup, ListGroupItem, Container} from 'react-bootstrap'
import axios from 'axios'
import {AuthContext} from '../../providers/AuthProvider'
import {useHistory} from 'react-router-dom'
import UserVaccine from './UserVaccine'
import EditUserDetails from './EditUserDetails'

//TODO: render user info, link to wallet, CRUD action options for user

const UserDashboard = (props) => {
  
  const auth = useContext(AuthContext)

  const history = useHistory()
  
  const [user, setUser] = useState([])
  const [vaccinations, setVaccinations] = useState([])

  useEffect(()=>{
    if(auth?.user){
    getVaccinations()
    getUserData()
    }else{
      history.push('/')
    }
  
  },[])
  
  
  const getUserData = async () => {
    //get user info
    let res = await axios.get(`/api/users/${auth.user.id}`)
    setUser(res.data)

    //setUser(res.data) --check to make sure this is right w/ console.log() once backend is setup
  }

  const getVaccinations = async () => {
    //TODO: change 1 in URL below to string interpolate userID once users controller is setup

    let res = await axios.get(`/api/vaccinations/${auth.user.id}`)
    setVaccinations(res.data)
    console.log('vaccinations: ', res.data)

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
           <EditUserDetails user={user} setUser={setUser}/>
         </Card.Body>
       </Card>
      </>
    )
  }

  const renderVaccines = () => {
    //generate list of vaccine choices
    return vaccinations.map( vaccination => {
      return(
        <UserVaccine key={vaccination.id} vaccination={vaccination} vaccination_id={vaccination.id} vaccine_id={vaccination.vaccine_id} vaccine_name={vaccination.vaccine_name} manufacturer={vaccination.manufacturer} issuer_name={vaccination.issuer_name}/>
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
