import React, { useContext, useEffect, useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProvider'
import {useHistory} from 'react-router-dom'


const  Login=(props) =>{
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const { handleLogin, authLoading, authErrors, setAuthErrors } = useContext(AuthContext)
  
  const history = useHistory()

  useEffect (()=> {
    setAuthErrors([])
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleLogin({email, password}, history)


  }
  if (authLoading) {
    return <p>Loading</p>
  }
  return (
    <>
    <h1>Login</h1>
    {authErrors.length > 0 && <p>{authErrors[0]}</p>}
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
        <Button variant="primary" type='submit'>Submit</Button>
    </Form>
    </>

);
};



export default Login

