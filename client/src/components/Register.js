import React, { useContext, useEffect, useState} from 'react'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'
import { AuthContext } from '../providers/AuthProvider'
import '../pages/ComponentStyles/container.css'
import { Link } from 'react-router-dom';
import Airplane from '../Images/airplaneWindow.jpg'
import useWindowDimensions from './useWindowDimensions';

const Register = ( {history} ) => {
  const { handleRegister, authErrors, setAuthErrors, authLoading } = useContext(AuthContext);
  const [email, setEmail] = useState(null)
  const [name, setName] = useState(null)
  const [first_name, setFirstName] = useState(null)
  const [last_name, setLastName] = useState(null)
	const [role, setRole] = useState('user')
  const [password, setPassword] = useState(null)
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)
  const [passwordWarning, setPasswordWarning] = useState(null)
  const {width} = useWindowDimensions()
  const hideCol = (width <= 760)

  useEffect(() =>{
    setAuthErrors([]);
    setPasswordWarning(null)
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password === passwordConfirmation){
      setPasswordWarning(null)
      handleRegister({
				role,
        email,
        password,
        passwordConfirmation,
        name,
        first_name,
        last_name,
      },
      history
      );
    }
    if(password !== passwordConfirmation){
      setPasswordWarning("Passwords do not match")
    };
  };

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
    <div className='login'>
    <Container className="logincontainer">
      <Row style={{width: '100%'}}>
      <Col style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', backgroundColor: 'white'}}> 
          <div className="div">
          <h1>Registration</h1>
          <p style={{marginTop: '15px', marginBottom: '35px'}}>Never forget your vaccine card again.</p>
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
              {authErrors?.email && <p style={{color: 'red', margin: '10px 0 0 0'}}>Please enter a valid email.</p>}
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
              <p style={{color: 'red', margin: '10px 0 0 0'}}>{passwordWarning}</p>
            </Form.Group>
            {hideCol === false && <Form.Label>Select Role</Form.Label>}
            {hideCol === false &&
            
            <Form.Group>
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
            </Form.Group>}
            {role === 'user' &&
            <>
            <Form.Group>
              <Form.Control
              label="First name"
              autoFocus
              required         
              name='first_name'
              value={first_name}
              placeholder='First Name'
              onChange={(e) => setFirstName(e.target.value)}
              />
              </Form.Group>
              <Form.Group>
              <Form.Control
              label="Last name"
              autoFocus
              required         
              name='last_name'
              value={last_name}
              placeholder='Last Name'
              onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            </>}
            {role === 'verifier' &&
            <Form.Group>
              <Form.Control
              label="Name"
              autoFocus
              required         
              name='name'
              value={name}
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
              />
              </Form.Group>}
            <Button style={{width: '100%', marginTop: '25px'}} variant="primary" type='submit'>Submit</Button>
          </Form>
          <p style={{marginTop: '20px'}}>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>
        </Col>
        {hideCol === false && 
          <Col style={{width: '50%', height: '100%', backgroundColor: 'white'}}>
            <img className="fade-in-image" src={Airplane} style={{maxWidth: "90%"}}/>
          </Col>
        }
      </Row>
    </Container>
    </div>
);
};
export default Register;