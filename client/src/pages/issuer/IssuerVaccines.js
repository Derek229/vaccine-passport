import React, { useContext, useState, useEffect } from 'react'
import {AuthContext} from '../../providers/AuthProvider'
import axios from 'axios'
import AdminVaccines from '../Admin/AdminVaccines'
import {Container, Card, Button, ListGroup, ListGroupItem, Form} from 'react-bootstrap'

//this page will show issuers option to assign existing vaccine to user through user's wallet


const IssuerVaccines = () => {
  const [users, setUsers] = useState ([])
  const [vaccines, setVaccines] = useState([])

  const auth = useContext(AuthContext)

  useEffect(()=>{
    getUsers()
    getVaccines()
  },[]) 

	const getUsers = async() => {
		let res = await axios.get(`/api/users/`)
		setUsers(res.data)
	}

  const userList = () => {
    return(
      <>
      <Form>
        <Form.Group controlId="Form.ControlInput1">
          <Form.Label>Select User</Form.Label>
          <Form.Control type="text" placeholder="User" />
          <ListGroup>
            <ListGroup.Item>User Name 1</ListGroup.Item>
            <ListGroup.Item variant="primary">User Name 2</ListGroup.Item>
            <ListGroup.Item action variant="secondary">
              User Name 3
            </ListGroup.Item>
          </ListGroup>
        </Form.Group>
      </Form>
      </>
    )
  }

  const getVaccines = async () => {
    let res = await axios.get(`/api/users/${auth.user.id}/vaccines`) 
    setVaccines(res.data)
  }
	
  
  if(auth.user.role === 'admin'){
    return(
      <AdminVaccines />
    )
  }else{
    return (
    <div>
      <h1>issuer vaccines (Create user wallet) here</h1>
      <Container>
        <h3>render form or select here to choose user</h3>
        <h3>render select here to choose vaccine</h3>
        <h4>confirmation button</h4>
        {userList()}
      </Container>
    </div>
    )
    }
}

export default IssuerVaccines
