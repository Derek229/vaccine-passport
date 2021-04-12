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
  const [userSelections, setUserSelections] = useState([]);
  const [vaccSelections, setVaccSelections] = useState([]);

  // const [options, setOptions] = useState([
  //   { name: 'Alabama', population: 4780127, capital: 'Montgomery', region: 'South' },
  //   { name: 'Alaska', population: 710249, capital: 'Juneau', region: 'West' },
  //   { name: 'Arizona', population: 6392307, capital: 'Phoenix', region: 'West' },
  //   { name: 'Arkansas', population: 2915958, capital: 'Little Rock', region: 'South' },
  //   { name: 'California', population: 37254503, capital: 'Sacramento', region: 'West' },
  //   { name: 'Colorado', population: 5029324, capital: 'Denver', region: 'West' },
  // ])

  const auth = useContext(AuthContext)

  useEffect(()=>{
    getUsers()
    getVaccines()
  },[]) 

	const getUsers = async() => {
		let res1 = await axios.get(`/api/users/`)
		setUsers(res1.data)
    console.log('users: ', res1.data)
	}

  const getVaccines = async () => {
    let res2 = await axios.get(`/api/users/${auth.user.id}/vaccines`) 
    setVaccines(res2.data)
    console.log('vaccines: ', res2.data)
  }
  const handleSubmit = async () => {
    //handle submission of vaccine sent to user wallet
    //axios.post(`/api/vaccination_wallets`, vaccine_id, user_id)
  }

  const normalizeUserData = (arrayIn) => {
    //normalize user data to display in typeahead
    const tempArray = []
    arrayIn.map(obj => {
      let name = `${obj.first_name} ${obj.last_name}, ID: ${obj.id}`
      let userId = obj.id
      let labelKey = obj.id

      tempArray.push({name: name, userId: userId, labelKey: labelKey})

    })
    return tempArray
  }

  const normalizeVaccData = (arrayIn) => {
    //normalize user data to display in typeahead
    const tempArray = []
    arrayIn.map(obj => {
      let name = `${obj.name}`
      let vaccineId = obj.id
      let labelKey = obj.id

      tempArray.push({vaccine: name, vaccineId: vaccineId, labelKey: labelKey})

    })
    return tempArray
  }

	const issueVaccForm = () => {
    let userOptions = normalizeUserData(users)
    let vaccOptions = normalizeVaccData(vaccines)
		return (
			<>
      <Form>
				<Form.Group>
					<Form.Label>Select a User</Form.Label>
					<Typeahead
						id="users"
						labelKey="name"
						onChange={setUserSelections}
						options={userOptions}
						placeholder="Select a User"
						selected={userSelections}
					/>
				</Form.Group>
        <Form.Group>
					<Form.Label>Select a Vaccine</Form.Label>
					<Typeahead
						id="vaccines"
						labelKey="vaccine"
						onChange={setVaccSelections}
						options={vaccOptions}
						placeholder="Select a Vaccine"
						selected={vaccSelections}
					/>
				</Form.Group>
        <Form.Group>
          <Button onClick={handleSubmit}>Submit Request</Button>
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
      <h1>issuer vaccines (add vacc to user wallet) here</h1>
      <Container>
        {issueVaccForm()}
      </Container>
        

    </>
    )
    }
}

export default IssuerVaccines
