import React, { useContext, useState, useEffect } from 'react'
import {AuthContext} from '../../providers/AuthProvider'
import axios from 'axios'
import AdminVaccines from '../Admin/AdminVaccines'
import { Typeahead } from 'react-bootstrap-typeahead';
import {Container, Button, Form} from 'react-bootstrap'

//this page will show issuers option to assign existing vaccine to user through user's wallet

//TODO: only show vaccines that the user does not have in select list


const IssuerVaccines = () => {
  const [users, setUsers] = useState ([])
  const [vaccines, setVaccines] = useState([])
  const [userSelection, setUserSelection] = useState([]);
  const [vaccSelection, setVaccSelection] = useState([]);

  const auth = useContext(AuthContext)

  useEffect(()=>{
    getUsers()
    getVaccines()
  },[]) 

	const getUsers = async() => {
		let res1 = await axios.get(`/api/users/`)
		setUsers(res1.data)
    console.log('users: ', res1.data)
    console.log('auth: ', auth.user.name)
	}

  const getVaccines = async () => {
    let res2 = await axios.get(`/api/users/${auth.user.id}/vaccines`) 
    setVaccines(res2.data)
    console.log('vaccines: ', res2.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    //handle submission of vaccine sent to user wallet
    let res = await axios.post(`/api/users/${auth.user.id}/vaccinations`, {user_id: userSelection[0].user_id, vaccine_id: vaccSelection[0].vaccine_id, issuer_name: auth.user.name, issuer_id: auth.user.id})
    console.log(res)
    alert(`vaccine: ${vaccSelection[0].vaccine} sent to user: ${userSelection[0].name}`)
    // console.log((`/api/vaccination_wallets, ${userSelection[0].user_id}, ${vaccSelection[0].vaccine_id}`))
  }

  const normalizeUserData = (arrayIn) => {
    //normalize user data to display in typeahead
    const tempArray = []
    arrayIn.forEach(obj => {
      let name = `${obj.first_name} ${obj.last_name}, ID: ${obj.id}`
      let user_id = obj.id
      let labelKey = 'user_id'

      //excludes issuers and admin from list of selectable people
      if(obj.role === "user"){
        tempArray.push({name: name, user_id: user_id, labelKey: labelKey})
      }
			
    })
    return tempArray
  }

  const normalizeVaccData = (arrayIn) => {
    //normalize user data to display in typeahead
    const tempArray = []
    arrayIn.forEach(obj => {
      let name = `${obj.name}, mfg: ${obj.manufacturer}`
      let vaccineId = obj.id
      let labelKey = obj.id

      tempArray.push({vaccine: name, vaccine_id: vaccineId, labelKey: labelKey})

    })
    return tempArray
  }

	const issuerVaccForm = () => {
    let userOptions = normalizeUserData(users)
    let vaccOptions = normalizeVaccData(vaccines)
		return (
			<>
      <Form onSubmit={handleSubmit}>
					<h3>Issuing as: {auth.user.name}</h3>
				<Form.Group>
					<Form.Label>Select a User</Form.Label>
					<Typeahead
						id="users"
						labelKey="name"
						onChange={setUserSelection}
						placeholder="Select a User"
            selected={userSelection}
            options={userOptions}
					/>
				</Form.Group>
        <Form.Group>
					<Form.Label>Select a Vaccine</Form.Label>
					<Typeahead
						id="vaccines"
						labelKey="vaccine"
						onChange={setVaccSelection}
						options={vaccOptions}
						placeholder="Select a Vaccine"
						defaultSelected={vaccSelection}
					/>
				</Form.Group>
        <Form.Group>
          <Button type="submit">Submit Request</Button>
        </Form.Group>
      </Form>
			</>
		)
	}
	
  
  if(auth.user.role === 'admin'){
    return(
      <AdminVaccines />
    )
  }else{
    return (
      <>
      <h1>Issue Vaccine to User</h1>
      <Container>
        {issuerVaccForm()}
      </Container>
        

    </>
    )
    }
}

export default IssuerVaccines
