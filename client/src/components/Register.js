import React, { useContext, useEffect, useState} from 'react'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'
import { AuthContext } from '../providers/AuthProvider'
import '../pages/ComponentStyles/container.css'
import { Link } from 'react-router-dom';
import Airplane from '../Images/airplaneWindow.jpg'

const Register = ( {history} ) => {
  const { handleRegister, authErrors, setAuthErrors } = useContext(AuthContext);
  const [email, setEmail] = useState(null)
	const [role, setRole] = useState('user')
  const [password, setPassword] = useState(null)
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)
  useEffect(() =>{
    setAuthErrors([]);
  },[]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password === passwordConfirmation){
      handleRegister({
				role,
        email,
        password,
        passwordConfirmation,
      },
      history
      );
    }else alert("Passwords Don't Match");
  };

  
  return (
    <div className='login'>
    <Container className="logincontainer">
      <Row style={{width: '100%'}}>
      <Col style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', backgroundColor: 'white'}}> 
          <div className="div">
          <h1>Registration</h1>
          <p style={{marginTop: '15px', marginBottom: '35px'}}>Never forget your vaccine card again.</p>
          {authErrors && authErrors.map((err) => <p>{err}</p>)}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Label>Account Details</Form.Label>
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
            <Form.Group>
              <Form.Control
                label="Password Confirmation"
                required
                name='passwordConfirmation'
                value={passwordConfirmation}
                placeholder='Password Confirmation'
                type='password'
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              /> 
            </Form.Group>
            <Form.Label>Select Role</Form.Label>
            <Form.Control 
              as="select"
              label="Role"
              required
              name='role'
              value={role}
              placeholder='Choose Role'
              onChange={(e) => {
                setRole(e.target.value)
              }}
              >
              <option>user</option>
              <option>verifier</option>
            </Form.Control>
            <Button style={{width: '100%', marginTop: '25px'}} variant="primary" type='submit'>Submit</Button>
          </Form>
          <p style={{marginTop: '20px'}}>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>
        </Col>
        <Col style={{width: '50%', height: '100%', backgroundColor: 'white'}}>
          <img className="fade-in-image" src={Airplane} style={{maxWidth: "90%"}}/>
        </Col>
      </Row>
    </Container>
    </div>
);
};
export default Register;