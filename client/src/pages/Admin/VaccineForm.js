import React, {useContext, useState} from 'react'
import Button from '../../components/Button'
import axios from 'axios'
import {Form} from 'semantic-ui-react'
import {AuthContext} from '../../providers/AuthProvider'
import {useHistory} from 'react-router-dom'

const VaccineForm = (props) => {
  const {vaccineProp, handleClose, addVaccine} = props

  const history = useHistory()
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
      required_vaccine_id: vaccineProp.required_vaccine_id,
    }  :
    {

  		name: '',
      manufacturer: '',
      image: '',
      verified: '',
      date: '',
      user_id: auth.user.id,
      //this defaults to required_vaccine_id: 1, will need to change later 
      required_vaccine_id: 1
    }
  )

  const createVaccine = async () => {
    try{
      let res = await axios.post(`/api/users/${auth.user.id}/vaccines`, vaccineState)
      handleClose()
      addVaccine(res.data)

    }catch(err){
      alert(err)
    }
  }

  const editVaccine = async () => {
    try{
      axios.put(`/api/users/${auth.user.id}/vaccines/${vaccineProp.id}`, vaccineState)
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
    console.log(e)
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
          placeholder={vaccineProp ? vaccineState.name : 'Name'}
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


