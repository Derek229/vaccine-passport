import React, { useContext, useEffect, useState } from 'react'
import {Form, Button, Row, Col, Container} from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProvider'
import {Link, useHistory} from 'react-router-dom'
import '../pages/ComponentStyles/container.css'
import Terminal from '../Images/terminal.jpg'


const  LandingPage =() =>{
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const { handleLogin, authLoading, authErrors, setAuthErrors } = useContext(AuthContext)
  
  const history = useHistory()


  return (
    <div className="login">
    <Container className="logincontainer">
      <Row style={{width: '100%'}}>
        <Col style={{width: '50%'}}>
            <img className="fade-in-image" src={Terminal} style={{maxWidth: "90%"}}/>
        </Col>
        <Col style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', backgroundColor: 'white'}}>
          <h1>Vaccine Passport</h1>
          <p style={{margin: '15px 0 0 0'}}>Never forget your vaccine card during travel again. </p>
          <p style={{margin:'0 0 35px 0'}}>A digital vaccine passport for the digital age. </p>
          <div className="buttondiv">
          <Link to="/register"><Button className="fade-in-image" style={{margin: '10px 10px 10px 0px', padding: '10px 30px 10px 30px'}}>Sign Up</Button></Link>
          <Link to="/login"><Button className="fade-in-image" style={{margin: '10px 10px 10px 0px', padding: '10px 35px 10px 35px'}}>Sign In</Button></Link>
          </div>
        </Col>
      </Row>
    </Container>
    </div>

);
};



export default LandingPage

