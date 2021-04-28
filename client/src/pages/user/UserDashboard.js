import React, {useState, useEffect, useContext} from 'react'
import {CardGroup, Card, ListGroup, ListGroupItem, Container, Button, Row, Col, Modal} from 'react-bootstrap'
import axios from 'axios'
import {AuthContext} from '../../providers/AuthProvider'
import {useHistory} from 'react-router-dom'
import UserVaccine from './UserVaccine'
import EditUserDetails from './EditUserDetails'
import '../ComponentStyles/container.css'
import UserNav from './UserNav'
import UserImageUploader from './UserImageUploader'
import useWindowDimensions from '../../components/useWindowDimensions'

//TODO: render user info, link to wallet, CRUD action options for user

const UserDashboard = (props) => {
  
	const { user_id} = props

	const {width} = useWindowDimensions()

	const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
       <Card style={{margin: '0 0 50px 0'}}>
         <Card.Body>
           <Card.Title>{user?.first_name ? <h4>{user.first_name} {user.last_name}</h4> : <h4>{user.name} </h4>}</Card.Title>
         </Card.Body>
         <ListGroup className="list-group-flush">
				 	<ListGroupItem>Age: {user.age}</ListGroupItem>
				 	<ListGroupItem>Gender: {user.gender}</ListGroupItem>
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

	const pictureUploadModal = () => {
		return (
			<>
				<a onClick={handleShow}>
				{user.image ? <img src={user.image} alt="Profile" style={{width:'250px', height:"250px", borderRadius:"50%"}}/> : uploadButton()}
				</a>
	
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Upload Your Profile Picture</Modal.Title>
					</Modal.Header>
					<Modal.Body><UserImageUploader handleClose={handleClose} user_id={user_id}/></Modal.Body>
				</Modal>
			</>
		);  
	}

  const uploadButton = () => {return(<Button onClick={handleShow}>Upload Profile Picture</Button>)}

	if (width >= 900){

    return (
    <>
      <div>  
        <UserNav user={user} setShowProfile={setShowProfile} setShowVaccines={setShowVaccines}/>
        <Container>
            {showProfile && 
              <div>
                <Row className="justify-content-md-center">
								<Card style={{backgroundColor: 'rgb(0, 0, 0, 0.0)', border: '0px solid rgb(0, 0, 0, 0.0)', margin: '0px 0 0 0 ', justifyContent: "center", alignItems: "center"}}>
                    <h3 style={{marginTop: '0px'}}> {pictureUploadModal()}</h3>
                  </Card>
                  <Col>
                  <div className="header2" style={{marginBottom: '20px'}}>
                    <h2 style={{marginBottom: '0px'}}>My Profile Information</h2>
                    <div className="rightalign" style={{marginBottom: '0px'}}>
                      <EditUserDetails getUserData={getUserData} user={user} setUser={setUser}/>
                    </div>
                  </div>
                    {renderUser()}
                  </Col>
                </Row>
              </div>
            }

              {showVaccines &&
							<>
								<div className="vaccineContainers">
								<h2  style={{marginBottom: '30px'}}>My Vaccines</h2>
								</div>
                <div className="vaccineContainers">
                  <CardGroup>
                    {renderVaccines()}
                  </CardGroup>
								</div>
							</>
              }
        </Container>
      </div>
    </>
    )
	} else {
		return(
			<>
      <div>  
        <UserNav user={user} setShowProfile={setShowProfile} setShowVaccines={setShowVaccines}/>
        <Container>
            {showProfile && 
              <div>
                {/* <Row className="justify-content-md-center"> */}
								<Card style={{backgroundColor: 'rgb(0, 0, 0, 0.0)', border: '0px solid rgb(0, 0, 0, 0.0)', margin: '20px 0 0 0 ', justifyContent: "center", alignItems: "center"}}>
                    <h3 style={{marginTop: '0px'}}> {pictureUploadModal()}</h3>
                  </Card>
                  {/* <Col> */}
                  <div className="header2" style={{marginBottom: '20px'}}>
                    <h2 style={{marginBottom: '0px'}}>My Profile Information</h2>
                    <div className="rightalign" style={{marginBottom: '0px'}}>
                      <EditUserDetails getUserData={getUserData} user={user} setUser={setUser}/>
                    </div>
                  </div>
                    {renderUser()}
                  {/* </Col> */}
                {/* </Row> */}
              </div>
            }

              {showVaccines &&
                <div className="vaccineContainers">
                  <h2 style={{marginBottom: '20px'}}>My Vaccines</h2>
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
}

export default UserDashboard
