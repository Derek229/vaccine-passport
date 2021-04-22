import React, { useContext, useEffect, useState} from 'react'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'
import { AuthContext } from '../providers/AuthProvider'
import '../pages/ComponentStyles/container.css'
import { Link } from 'react-router-dom';

const Register = ( {history} ) => {
  const { handleRegister, authErrors, setAuthErrors } = useContext(AuthContext);
  const [email, setEmail] = useState(null)
	const [role, setRole] = useState('')
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
        <Col style={{width: '50%'}}>
          <div className="div">
          <h1>Registration</h1>
          <p style={{marginTop: '15px', marginBottom: '35px'}}>Never forget your vaccine card again.</p>
          {authErrors && authErrors.map((err) => <p>{err}</p>)}
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
            <div className="rolefield">
              <Form.Group as={Row} style={{margin: 'auto auto auto 0'}}>
                <Form.Label as="legend" column style={{display: 'flex', margin: 'auto 0 auto auto', paddingRight: '0'}}>
                  Role:
                </Form.Label>
                <Col style={{display: 'flex', margin: 'auto 0 auto auto', paddingLeft: '0'}}>
                  <Form.Check
                    type="radio"
                    label="user"
                    name="role"
                    id="formHorizontalRadios1"
                    onChange={(e) => setRole(e.target.labels[0].innerText)}
                  />
                  </Col>
                  <Col style={{display: 'flex', margin: 'auto 0 auto 0', paddingLeft: '0'}}>
                  <Form.Check
                    style={{margin: '0'}}
                    type="radio"
                    label="verifier"
                    name="role"
                    id="formHorizontalRadios2"
                    onChange={(e) => setRole(e.target.labels[0].innerText)}
                  />
                </Col>
              </Form.Group>
            </div>
            <Button style={{width: '100%', marginTop: '5px'}} variant="primary" type='submit'>Submit</Button>
          </Form>
          <p style={{marginTop: '20px'}}>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>
        </Col>
        <Col style={{width: '50%', backgroundColor: 'white'}}>
          <h1>Image Here</h1>
        </Col>
      </Row>
    </Container>
    </div>
);
};
export default Register;