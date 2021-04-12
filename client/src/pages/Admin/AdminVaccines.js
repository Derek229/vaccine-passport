import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import {Button, Container, Modal} from 'react-bootstrap'
import VaccineForm from './VaccineForm'
import Vaccine from './AdminVaccine'
import { AuthContext } from '../../providers/AuthProvider'

const Vaccines = () => {

  const [vaccines, setVaccines] = useState([])
  const auth = useContext(AuthContext)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //call getVaccines on mount
  useEffect(()=>{
    getVaccines()
  },[]) 

  //get vaccines associated with user (issuer) based on user ID
  const getVaccines = async () => {
    let res = await axios.get(`/api/users/${auth.user.id}/vaccines`) 
    setVaccines(res.data)
  }

  //generate list of vaccines
  const renderVaccines = () => {  
    //map through array and pass each vaccine to vaccine.js to render card
    return vaccines.map( vaccine => <Vaccine key={vaccine.id} vaccine={vaccine} userId={auth.user.id} setVaccines={setVaccines} vaccines={vaccines}/>)
  }

  //when new vaccine is added to db, this fn adds the new vacc to the array rendered in the page
  //eliminates need to remount
  const addVaccine = (vaccine) => {
    setVaccines([vaccine,...vaccines])
  }

  //modal specific for adding new vaccine
  const addFormModal = () => {
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add New Vaccine
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new Vaccine</Modal.Title>
          </Modal.Header>
          <Modal.Body><VaccineForm handleClose={handleClose} addVaccine={addVaccine}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }



  return (
    <>
    <Container>
      <h1>page for issuer to see all vaccines, add, edit, and delete listings</h1>
      <div>
        {addFormModal()}
      </div>
    </Container>
    <br />
    <Container>
      <div>
        {renderVaccines()}
      </div>
    </Container>
    </>
  )
}

export default Vaccines
