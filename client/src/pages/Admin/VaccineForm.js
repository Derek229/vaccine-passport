import React, {useContext, useState} from 'react'
import Button from '../../components/Button'
import axios from 'axios'
import {Form} from 'react-bootstrap'
import {AuthContext} from '../../providers/AuthProvider'
// import {useHistory} from 'react-router-dom'

const VaccineForm = (props) => {
  const {vaccineProp, handleClose, addVaccine} = props

  // const history = useHistory()
  const auth = useContext(AuthContext);
  const [vaccineState, setVaccineState] = useState(
    vaccineProp ? {
      name: vaccineProp.name,
      manufacturer: vaccineProp.manufacturer,
      image: vaccineProp.image,
      verified: vaccineProp.verified,
      date: vaccineProp.date,
			user_id: auth.user.id,
    }  :
    {

  		name: '',
      manufacturer: '',
      image: '',
      verified: '',
      date: '',
      user_id: auth.user.id,
    }
  )

  const createVaccine = async () => {
    try{
      let res = await axios.post(`/api/users/${auth.user.id}/vaccines`, vaccineState)
      handleClose()
      addVaccine(res.data, "add")

    }catch(err){
      alert(err)
    }
  }

  const editVaccine = async () => {
    try{
      await axios.put(`/api/users/${auth.user.id}/vaccines/${vaccineProp.id}`, vaccineState)
      addVaccine()
      handleClose()
    }catch(err){
      alert(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
	
    if (vaccineProp){
      editVaccine()
    }else{
			createVaccine()
    }
    
  }

  const handleChange = (e) => {
    setVaccineState({...vaccineState, [e.target.name]: e.target.value})
  }

	return (
		<>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          label="Vaccine Name"
          autoFocus
          required         
          name='name'
          value={vaccineState.name}
          placeholder={vaccineProp ? vaccineState.name : 'Name'}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          label="Vaccine Manufacturer"
          required
          name='manufacturer'
          value={vaccineState.manufacturer}
          placeholder={vaccineProp ? vaccineState.manufacturer : 'Manufacturer'}
          onChange={handleChange}
        /> 
      </Form.Group>
        <Button variant="primary" type='submit'>Submit</Button>
    </Form>
    </>
	)
}

export default VaccineForm


