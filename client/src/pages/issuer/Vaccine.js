import React, { useState, useEffect } from 'react'
import {Modal, Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import VaccineForm from '../issuer/VaccineForm'
import axios from 'axios'

const Vaccine = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const {vaccine, userId, setVaccines, vaccines} = props

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
          <Modal.Body><VaccineForm vaccineProp={vaccine} handleClose={handleClose}/></Modal.Body>
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
    let res = await axios.delete(`/api/users/${userId}/vaccines/${vaccine.id}`)
    const filteredVaccines = vaccines.filter(x=>x.id != vaccine.id)
    setVaccines(filteredVaccines)
  }

  return(
    <>
      <Card>
        <Card.Body>
          <Card.Title><h4>Vaccine Name: {vaccine.name}</h4></Card.Title>
          <Card.Text>
          Manufacturer {vaccine.manufacturer}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>verified status: {vaccine.verified}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          {editFormModal()}
          <Button className="ml-1 btn btn-danger" onClick={()=>deleteVaccine()}>Delete</Button>
        </Card.Body>
      </Card>
    </>
      )
}

export default Vaccine
