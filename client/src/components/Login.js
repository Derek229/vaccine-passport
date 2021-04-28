import React, { useContext, useEffect, useState } from 'react'
import {Form, Button, Row, Col, Container} from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProvider'
import {Link, useHistory} from 'react-router-dom'
import '../pages/ComponentStyles/container.css'
import Terminal2 from '../Images/terminal2.jpg'
import useWindowDimensions from './useWindowDimensions';

const  Login=() =>{
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const { handleLogin, authLoading, authErrors, setAuthErrors } = useContext(AuthContext)
  const {width} = useWindowDimensions()
  const history = useHistory()

  const hideCol=(width <= 760)

  useEffect (()=> {
    setAuthErrors([])
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleLogin({email, password}, history)


  }
  if (authLoading) {
    return(
      <div className="login">
        <Container>
          <h3 style={{margin: '50px 0 0 auto'}}>Please wait...</h3>
        </Container>
      </div> 
    )
  }
  return (
    <div className="login">
    <Container className="logincontainer">
      <Row style={{width: '100%'}}>
        <Col style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', backgroundColor: 'white'}}>  
          <div className="div">
            <h1>Sign in</h1>
            <p style={{marginTop: '15px', marginBottom: '35px'}}>Welcome back to your digital vaccine passport.</p>
            {authErrors.length > 0 && <p style={{color: 'red'}}>{authErrors[0]}</p>}
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  label="Email"
                  autoFocus
                  required         
                  name='email'
                  value={email}
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  label="Password"
                  required
                  name='password'
                  value={password}
                  placeholder='Password'
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                /> 
              </Form.Group>
                <Button style={{width: '100%'}} variant="primary" type='submit'>Submit</Button>
            </Form>
            <p style={{marginTop: '15px'}}>Don't have an account? <Link to="/register">Sign Up</Link></p>
          </div>
        </Col>
        {hideCol === false &&
          <Col style={{width: '50%', backgroundColor: 'white'}}>
            <img className="fade-in-image" src={Terminal2} alt="transport terminal" style={{maxWidth: "90%"}}/>
          </Col>
        }
      </Row>
    </Container>
    </div>

);
};



export default Login

