import React, { useContext, useEffect, useState } from 'react'
import {Form, Button, Row, Col, Container} from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProvider'
import {Link, useHistory} from 'react-router-dom'
import '../pages/ComponentStyles/container.css'


const  LandingPage =() =>{
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const { handleLogin, authLoading, authErrors, setAuthErrors } = useContext(AuthContext)
  
  const history = useHistory()


  if (authLoading) {
    return <p>Loading</p>
  }
  return (
    <div className="login">
    <Container className="logincontainer">
      <Row style={{width: '100%'}}>
        <Col style={{width: '50%'}}>
          <div className="div">
            <h1>Image Here</h1>
            <p style={{marginTop: '15px', marginBottom: '35px'}}>Probably an Image of the App</p>
          </div>
        </Col>
        <Col style={{width: '50%', backgroundColor: 'white'}}>
          <h1>Vaccine Passport</h1>
          <p style={{margin: '15px 0 0 0'}}>Never forget your vaccine card during travel again. </p>
          <p style={{margin:'0 0 35px 0'}}>A digital vaccine passport for the digital age. </p>
          <Link to="/register"><Button style={{margin: '10px 10px 10px 0px', padding: '10px 30px 10px 30px'}}>Sign Up</Button></Link>
          <Link to="/login"><Button style={{margin: '10px 10px 10px 0px', padding: '10px 35px 10px 35px'}}>Log In</Button></Link>
        </Col>
      </Row>
    </Container>
    </div>

);
};



export default LandingPage

