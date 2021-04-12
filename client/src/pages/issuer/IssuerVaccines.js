import React, { useContext, useState, useEffect } from 'react'
import {AuthContext} from '../../providers/AuthProvider'
import axios from 'axios'
import AdminVaccines from '../Admin/AdminVaccines'
import { Typeahead } from 'react-bootstrap-typeahead';
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
      </>
    )
  }

  const getVaccines = async () => {
    let res = await axios.get(`/api/users/${auth.user.id}/vaccines`) 
    setVaccines(res.data)
  }

	const BasicExample = () => {
		const [singleSelections, setSingleSelections] = useState([]);
		const [multiSelections, setMultiSelections] = useState([]);

		return (
			<>
				<Form.Group>
					<Form.Label>Select a User</Form.Label>
					<Typeahead
						id="basic-typeahead-single"
						labelKey="name"
						onChange={setSingleSelections}
						// options={options}
						placeholder="Select a User"
						selected={singleSelections}
					/>
				</Form.Group>
				<Form.Group style={{ marginTop: '20px' }}>
					<Form.Label>Select One or Multiple Completed Vaccinations</Form.Label>
					<Typeahead
						id="basic-typeahead-multiple"
						labelKey="name"
						multiple
						onChange={setMultiSelections}
						// options={options}
						placeholder="Select Completed Vaccinations"
						selected={multiSelections}
					/>
				</Form.Group>
			</>
		)
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
