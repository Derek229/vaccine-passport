import React, {useState, useEffect, useContext} from 'react'
import {CardGroup, Card, ListGroup, ListGroupItem, Container, Button, Row, Col, Nav, NavDropdown} from 'react-bootstrap'
import axios from 'axios'
import {AuthContext} from '../../providers/AuthProvider'
import {useHistory} from 'react-router-dom'
import UserVaccine from './UserVaccine'
import EditUserDetails from './EditUserDetails'
import '../ComponentStyles/container.css'

//TODO: render user info, link to wallet, CRUD action options for user

const UserDashboard = () => {
  
  const auth = useContext(AuthContext)

  const history = useHistory()
  
  const [user, setUser] = useState([])
  const [vaccinations, setVaccinations] = useState([])

  const [showProfile, setShowProfile] = useState(true)
  const [showVaccines, setShowVaccines] = useState(false)

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
    try{
    let res = await axios.get(`/api/users/${auth.user.id}`)
    setUser(res.data)
    }catch(err){
      alert('error retrieiving profile information')
    }

    //setUser(res.data) --check to make sure this is right w/ console.log() once backend is setup
  }

  const getVaccinations = async () => {
    //TODO: change 1 in URL below to string interpolate userID once users controller is setup
    try{
    let res = await axios.get(`/api/vaccinations/${auth.user.id}`)
    setVaccinations(res.data)
    console.log('vaccinations: ', res.data)
    }catch(err){
      alert('error retrieving vaccines')
    }

  }

  const renderUser = () => {
    //generate user profile information (maybe use a card?)
    return(
      <>
       <Card >
         <Card.Body>
           <Card.Title>{user?.first_name ? <h4>{user.first_name} {user.last_name}</h4> : <h4>{user.name} </h4>}</Card.Title>
           <Card.Text>
            User Details (ID): {user.id}
           </Card.Text>
         </Card.Body>
         <ListGroup className="list-group-flush">
           <ListGroupItem>Email: {user.email}</ListGroupItem>
         </ListGroup>
       </Card>
      </>
    )
  }

  const renderVaccines = () => {
    //generate list of vaccine choices
    return vaccinations.map( vaccination => {
      return(
        <UserVaccine key={vaccination.id} vaccination={vaccination} vaccination_id={vaccination.id} vaccine_id={vaccination.vaccine_id} vaccine_name={vaccination.vaccine_name} manufacturer={vaccination.manufacturer} issuer_name={vaccination.issuer_name} getVaccinations={getVaccinations}/>
      )
    })
  }

    return (
    <>
      <div>
        <div style={{background: 'white', display: 'flex', flexDirection: 'row', alignContent: 'center', margin: 'auto', height: '60px'}}>
          <div className="leftalign">
            {user?.role === "user" ? 
              <Nav.Link style={{margin: '0 0 0 10px'}}>{user?.first_name} {user?.last_name}</Nav.Link> 
            : 
              <Nav.Link style={{margin: '0 0 0 100px'}}>{user?.name}</Nav.Link>
            }
          </div>
          <Nav className="navbar2" >
            {user.role === "user" && 
            <>
              <Nav.Link 
                active 
                style = {{width: '130px', textAlign: "center"}} 
                onClick={() => {
                  setShowProfile(true)
                  setShowVaccines(false)
                }}
              >
                My Profile
              </Nav.Link>
              <h3 style={{color: 'lightgrey', marginTop: '0px', marginBottom: '0px'}}>|</h3>
              <Nav.Link 
                active 
                style = {{width: '130px', textAlign: "center"}} 
                onClick={() => {
                  setShowProfile(false)
                  setShowVaccines(true)
                }}
              >
                My Vaccines
              </Nav.Link>
            </>
              } 
          </Nav>
          <div className="rightAlign">
            {user.role === "user" &&
              <Button style= {{margin: '10px 20px 10px 10px'}} href="/users/self/qr_code">My QR Code</Button>
            }
            {user.role === "admin" &&
              <NavDropdown title="Menu" id="basic-nav-dropdown" style={{margin: '10px 100px 0px 0px'}}>
                <NavDropdown.Item href="/admin/vaccines">Manage Vaccines</NavDropdown.Item>
                <NavDropdown.Item href="/admin/vaccinations">Manage Vaccination</NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item href="/users/issuer/vaccines">Issue Vaccination</NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item href="/users/verifier/requiredVaccines">Required Vaccines</NavDropdown.Item>
                <NavDropdown.Item href="/users/verifier/QRScanner">QR Scanner</NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item href="/users/self/qr_code">My QR Code</NavDropdown.Item>
              </NavDropdown>
              
            }
          </div>
        </div>  
        
        <Container>
            {showProfile && 
              <div>
                <Row className="justify-content-md-center">
                  <Col>
                  <div className="header2" style={{marginBottom: '20px'}}>
                    <h2 style={{marginBottom: '0px'}}>My Account</h2>
                    <div className="rightalign" style={{marginBottom: '0px'}}>
                      <EditUserDetails getUserData={getUserData} user={user} setUser={setUser}/>
                    </div>
                    
                  </div>
                    {renderUser()}
                  </Col>
                  <Col md="auto">
                    <h3 style={{marginTop: '20px'}}>User Profile Image and Uploader here</h3>
                  </Col>
                </Row>
              </div>
            }

              {showVaccines &&
                <div>
                  <h2 className="header2" style={{marginBottom: '20px'}}>My Vaccines</h2>
                  <CardGroup >
                    {renderVaccines()}
                  </CardGroup>
                </div>
              }
        </Container>
      </div>
    </>
    )
}

export default UserDashboard
