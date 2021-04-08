import React, {useContext, useState} from 'react'
import Button from '../../components/Button'
import axios from 'axios'
import {Form} from 'semantic-ui-react'
import {AuthContext} from '../../providers/AuthProvider'

const VaccineForm = ({vaccineProp}) => {
  const auth = useContext(AuthContext);
  const [name, setName] = useState('')
  const [manufacturer, setManufacturer] = useState('')
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
      axios.post(`/api/users/${auth.user.id}/vaccines`, vaccineState)
    }catch(err){
      alert(err)
    }
  }

  const editVaccine = async () => {
    try{
      axios.put(`/api/users/${auth.user.id}/vaccines/${vaccineState.id}`, vaccineState)
    }catch(err){
      alert(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
	
    if (vaccineProp){
      editVaccine()
    }
			createVaccine()
    
  }

  const handleChange = (e) => {
    setVaccineState({...vaccineState, [e.target.name]: e.target.value})
  }

	return (
		<>
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Vaccine Name</label>
				<input 
          name="name"
          value={vaccineState.name}
          onChange={handleChange}
          placeholder='Enter Name'
        />
      </Form.Field>
      <Form.Field>
        <label>Vaccine Manufacturer</label>
				<input 
					name="manufacturer"
          value={vaccineState.manufacturer}
					onChange={handleChange}
					placeholder='Enter Manufacturer'
				/>
      </Form.Field>
      <Button type='submit'>Submit</Button> 
    </Form>
    </>
	)
}

export default VaccineForm


