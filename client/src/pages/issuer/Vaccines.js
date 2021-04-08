import axios from 'axios'
import React, { useState, useEffect, Fragment } from 'react'
import Card from '../../components/Card'
import { Header, Modal, Button } from 'semantic-ui-react'
import Form from '../../components/Form'
import VaccineForm from '../issuer/VaccineForm'

const Vaccines = () => {

  const [vaccines, setVaccines] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    getVaccines()
  },[])

  const getVaccines = async () => {
    //update :id of 1 in url to be variable for user accessing page
    let res = await axios.get(`/api/users/1/vaccines`) 
    setVaccines(res.data)
  }

  const renderVaccines = () => {
    //generate list of vaccines
    return vaccines.map( vaccine => {
      return(
        <>
        <div>
          <Card>
          <h1>Vaccine Name: {vaccine.name}</h1>
          <h2>Manufacturer: {vaccine.manufacturer}</h2>
          {/* <h3>verified status: {vaccine.verified}</h3> */}
          </Card>
        </div>
        </>
      )
    })
  }



  return (
    <>
    <h1>page for issuer to see all vaccines, add, edit, and delete listings</h1>
    <div>
		  <Button onClick={()=> setOpen(true)}>Add a New Vaccine</Button>
			<Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Add a New Vaccine</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <VaccineForm/>
          </Modal.Description>
          </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Close Form
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
    <div>
      
      {renderVaccines()}
    </div>
    </>
  )
}

export default Vaccines
