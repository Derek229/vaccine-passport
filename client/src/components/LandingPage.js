import React, { useContext, useState } from 'react'
import { Button, Row, Col, Container} from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProvider'
import {Link, useHistory} from 'react-router-dom'
import '../pages/ComponentStyles/container.css'
import Terminal from '../Images/terminal.jpg'
import BlueLogo from '../Logos/Covidia Blue 2F73DA Logo Only.png'
import useWindowDimensions from './useWindowDimensions';


const  LandingPage =() =>{

  const {width} = useWindowDimensions()
  
  const hideCol = (width <= 760)

  return (
    <div className="login">
    <Container className="logincontainer">
      <Row style={{width: '90%', flexWrap: 'auto', alignItems: 'center', justifyContent: 'center'}}>
        {(hideCol === false) && 
          <Col style={{width: '50%'}}>
            <img id="hide-mobile" className="fade-in-image" src={Terminal} style={{maxWidth: "90%"}}/>
          </Col>
        }
        <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%', backgroundColor: 'white'}}>
          <Row style={{display: 'flex', flexWrap: 'auto', flexDirection: 'row', justifyContent: 'center', width: '100%', backgroundColor: 'white'}}>
            {hideCol === false && <Col sm={4} style={{margin: '0px'}}>
            <img src={BlueLogo} style={{maxWidth: "100%", alignSelf: 'center'}}/>
            </Col>}
            <Col style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '65%', backgroundColor: 'white', margin: '0px'}}>
              <h1 id="expand-mobile" style={{color: '#2F73DA'}}>Vaccine Passport</h1>
              <p style={{margin: '-10px 0px 0 10px'}}>by COVIDIA</p>
              <p style={{margin: '15px auto 0 10px'}}>Never forget your vaccine card during travel again. </p>
            </Col>
          </Row>
          
          
          <div className="buttondiv">
          <Link to="/register"><Button className="fade-in-image" style={{margin: '10px 10px 10px 0px', padding: '10px 30px 10px 30px'}}>Sign Up</Button></Link>
          <Link to="/login"><Button className="fade-in-image" style={{margin: '10px 10px 10px 0px', padding: '10px 35px 10px 35px'}}>Sign In</Button></Link>
          </div>
        </Col>
      </Row>
      {hideCol === true && <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '50%', margin: '0'}}>
        <Link to="/all-vaccines"><Button className="fade-in-image" style={{margin: '50px 0px 10px 0px', padding: '10px 30px 10px 30px'}}>All Vaccines</Button></Link>
        <Link to="/all-verifiers"><Button className="fade-in-image" style={{margin: '20px 0px 10px 0px', padding: '10px 28px 10px 28px'}}>All Verifiers</Button></Link>
        <Link to="/about"><Button className="fade-in-image" style={{margin: '20px 0px 10px 0px', padding: '10px 30px 10px 30px'}}>About Us</Button></Link>
      </div>}
    </Container>
    </div>

);
};



export default LandingPage

