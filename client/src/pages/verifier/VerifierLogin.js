// import React, { useContext, useEffect, useState } from 'react'
// import { Form, Segment, Header, Button } from 'semantic-ui-react'
// import { AuthContext } from '../provider/AuthProvider'
// import {Link} from 'react-router-dom'

// const  VerifierLogin=(props) =>{
//   const [email, setEmail] = useState('')
//   const [password, setPassword]= useState('')
//   const { handleLogin, authLoading, authErrors, setAuthErrors } = useContext(AuthContext)

//   useEffect (()=> {
//     setAuthErrors([])
//   }, [])

//   const handleSubmit =(e) => {
//     e.preventDefault()
//     handleLogin({email, password}, props.history)
//   }
//   if (authLoading) {
//     return <p>Loading</p>
//   }
//   return (
//     <Segment basic>
//     <Header as="h1" textAlign="center">
//       Login
//     </Header>
//     {authErrors.length > 0 && <p>{authErrors[0]}</p>}
//     <Form onSubmit={handleSubmit}>
//       <Form.Input
//         label="Email"
//         autoFocus
//         required
//         name="email"
//         value={email}
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <Form.Input
//         label="Password"
//         required
//         name="password"
//         value={password}
//         placeholder="Password"
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Segment textAlign="center" basic>
//         <Button loading={authLoading} primary type="submit">
//           Submit
//         </Button>
//       </Segment>
//   </Form>
//   <Link to="/Login">
//     Click here to login or register your company
//   </Link>
//   </Segment>

// );
// };


// export default VerifierLogin

import React from 'react'
import { Link } from 'react-router-dom'
import Login from "../../components/Login"

function VerifierLogin() {
  return (
    <div>
      <h1>Verifier </h1>
      <Login />
      <Link to='/'>return to user login</Link>    
    </div>
  )
}

export default VerifierLogin
