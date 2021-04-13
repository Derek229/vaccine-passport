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
  const [userSelection, setUserSelection] = useState([]);
  const [vaccSelection, setVaccSelection] = useState([]);
  const [wallet, setWallet] = useState({
    user_id: 0,
    vaccine_id: 0,
  })

  const [user_id, setUserId] = useState('')
  const [vaccine_id, setVaccId] = useState('vaccine_id')

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
  const handleSubmit = async (e) => {
    e.preventDefault()
    //handle submission of vaccine sent to user wallet
    let res = await axios.post(`/api/users/${auth.user.id}/vaccination_wallets`, {user_id: userSelection[0].user_id, vaccine_id: vaccSelection[0].vaccine_id})
    console.log(res)
    alert(`vaccine: ${vaccSelection[0].vaccine} sent to user: ${userSelection[0].name}`)
    // console.log((`/api/vaccination_wallets, ${userSelection[0].user_id}, ${vaccSelection[0].vaccine_id}`))
  }

  const normalizeUserData = (arrayIn) => {
    //normalize user data to display in typeahead
    const tempArray = []
    arrayIn.map(obj => {
      let name = `${obj.first_name} ${obj.last_name}, ID: ${obj.id}`
      let user_id = obj.id
      let labelKey = 'user_id'

      tempArray.push({name: name, user_id: user_id, labelKey: labelKey})

    })
    return tempArray
  }

  const normalizeVaccData = (arrayIn) => {
    //normalize user data to display in typeahead
    const tempArray = []
    arrayIn.map(obj => {
      let name = `${obj.name}, mfg: ${obj.manufacturer}`
      let vaccineId = obj.id
      let labelKey = vaccine_id

      tempArray.push({vaccine: name, vaccine_id: vaccineId, labelKey: labelKey})

    })
    return tempArray
  }

  const handleUserChange = (choice) => {
    setWallet({...wallet, [choice.labelKey]: choice.userId})
  }

	const issuerVaccForm = () => {
    let userOptions = normalizeUserData(users)
    let vaccOptions = normalizeVaccData(vaccines)
		return (
			<>
      <Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Select a User</Form.Label>
					<Typeahead
						id="users"
						labelKey="name"
						onChange={setUserSelection}
						placeholder="Select a User"
            // onChange={
            //   handleUserChange(userSelection)
            // }
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
            // onChange={(selected) => {
            //   setWallet({...wallet, [wallet.vaccine_id]: selected.vaccineId})
            //   console.log(wallet)
            // }}
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
      <h1>issuer vaccines (add vacc to user wallet) here</h1>
      <Container>
        {issuerVaccForm()}
      </Container>
        

    </>
    )
    }
}

export default IssuerVaccines
