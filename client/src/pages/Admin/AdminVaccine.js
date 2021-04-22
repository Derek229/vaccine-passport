import React, { useState } from 'react'
import {Modal, Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import VaccineForm from './VaccineForm'
import axios from 'axios'


const Vaccine = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const {vaccine, userId, setVaccines, vaccines, addVaccine} = props

  //modal specific for editing items in page
  const editFormModal = () => {
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit this Vaccine</Modal.Title>
          </Modal.Header>
          <Modal.Body><VaccineForm vaccineProp={vaccine} addVaccine={addVaccine} handleClose={handleClose}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        
      </>
    );
  }

  //called when delete is clicked, deletes item from DB and filters items rendered on page
  const deleteVaccine = async () => {
  	await axios.delete(`/api/users/${userId}/vaccines/${vaccine.id}`)
    const filteredVaccines = vaccines.filter(x=>x.id !== vaccine.id)
    setVaccines(filteredVaccines)
  }

  return(
    <>
      <tr>
        <td>{vaccine.id}</td>
        <td>{vaccine.name}</td>
        <td>{vaccine.manufacturer}</td>
        <td>
          {editFormModal()}
          <Button className="ml-2 btn btn-danger" onClick={()=>deleteVaccine()}>Delete</Button>
        </td>
      </tr>
    </>
      )
}

export default Vaccine
