import React, { useContext, useEffect, useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { AuthContext } from '../providers/AuthProvider'

const Register = ( {history} ) => {
  const { handleRegister, authErrors, setAuthErrors } = useContext(AuthContext);
  const [email, setEmail] = useState(null) 
  const [password, setPassword] = useState(null)
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)
  useEffect(() =>{
    setAuthErrors([]);
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password === passwordConfirmation){
      handleRegister({
        email,
        password,
        passwordConfirmation,
      },
      history
      );
    }else alert("Passwords Don't Match");
  };

  return (
    <>
    <h1>Register New Account</h1>
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
        <Button variant="primary" type='submit'>Submit</Button>
    </Form>
    </>

);
};
export default Register;