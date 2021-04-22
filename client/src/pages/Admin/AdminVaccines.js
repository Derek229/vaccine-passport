import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import {Button, Modal, Table, Container} from 'react-bootstrap'
import VaccineForm from './VaccineForm'
import AdminVaccine from './AdminVaccine'
import { AuthContext } from '../../providers/AuthProvider'
import '../ComponentStyles/container.css'

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
    return vaccines.map( vaccine => <AdminVaccine key={vaccine.id} addVaccine={addVaccine} vaccine={vaccine} userId={auth.user.id} setVaccines={setVaccines} vaccines={vaccines}/>)
  }

  const vaccinesTable = () => {
    return(
      <Table style={{padding: '0px', margin: '0', backgroundColor: 'white'}} hover responsive striped bordered>
      <thead>
        <tr>
          <th width="10%">Vaccine ID</th>
          <th>Vaccine Name</th>
          <th>Manufacturer</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderVaccines()}
      </tbody>
    </Table>
    )
  }

  //when new vaccine is added to db, this fn adds the new vacc to the array rendered in the page
  //eliminates need to remount
  const addVaccine = (vaccine, x) => {
    if(x === "add"){
    setVaccines([...vaccines, vaccine])
    }else{
      getVaccines()
    }
  }

  //modal specific for adding new vaccine
  const addFormModal = () => {
    return (
      <div style={{margin: '0'}}>
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
      </div>
    );
  }



  return (
    <>
    <Container>
      <div className="header">
        <div className="leftalign">
          <h1>Manage Vaccines</h1>
        </div>
        <div>
          {addFormModal()}
        </div>
      </div>
      <div className="tablecontainer">
        {vaccinesTable()}
      </div>
    </Container>
    </>
  )
}

export default Vaccines
