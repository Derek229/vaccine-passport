import React, { useState, useEffect, Fragment } from 'react'
import Card from '../../components/Card'
import {Modal, Button } from 'semantic-ui-react'
import VaccineForm from '../issuer/VaccineForm'
import axios from 'axios'

const Vaccine = (props) => {
  const [open, setOpen] = useState(false)
  
  const {vaccine, userId, setVaccines, vaccines} = props

  //modal specific for editing items in page
  const editFormModal = () => {
    return(
      <>
      <div>
		  <Button onClick={()=> setOpen(true)}>Edit Vaccine</Button>
			<Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Edit this Vaccine</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {/* pass vaccine to fill in form fields, pass setOpen to close modal on submission */}
            <VaccineForm vaccineProp={vaccine} setOpen={setOpen}/>
          </Modal.Description>
          </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Close Form
          </Button>
        </Modal.Actions>
      </Modal>
      </div>
      </>
      )
  }

  //called when delete is clicked, deletes item from DB and filters items rendered on page
  const deleteVaccine = async () => {
    let res = await axios.delete(`/api/users/${userId}/vaccines/${vaccine.id}`)
    const filteredVaccines = vaccines.filter(x=>x.id != vaccine.id)
    setVaccines(filteredVaccines)
  }

  return(
        <div>
          <Card>
          <h1>Vaccine Name: {vaccine.name}</h1>
          <h2>Manufacturer: {vaccine.manufacturer}</h2>
          {/* <h3>verified status: {vaccine.verified}</h3> */}
          <div>
          {editFormModal()}
          <Button onClick={()=>deleteVaccine()} color='red'>Delete</Button>
          </div>
          </Card>
        </div>
      )
}

export default Vaccine
