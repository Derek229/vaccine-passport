import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import {Button, Modal, Table, Container} from 'react-bootstrap'
import VaccineForm from './VaccineForm'
import AdminVaccine from './AdminVaccine'
import { AuthContext } from '../../providers/AuthProvider'
import '../ComponentStyles/container.css'
import AdminNav from '../../components/AdminNav'

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
      <Table style={{padding: '0px', margin: '0', backgroundColor: 'white'}} hover responsive striped>
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
  
        <Modal style={{margin: '5% 0 0 0 '}} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new Vaccine</Modal.Title>
          </Modal.Header>
          <Modal.Body><VaccineForm handleClose={handleClose} addVaccine={addVaccine}/></Modal.Body>
        </Modal>
      </div>
    );
  }



  return (
    <>
    <AdminNav />
    <Container>
      <div className="header">
        <div className="leftalign">
          <h3 style={{margin: '10px'}}>Manage All Vaccines </h3>
          <h3 style={{color: 'lightgrey', marginTop: '10px', marginBottom: '0px'}}>|</h3>
          <p style={{marginTop: '16px', paddingLeft: '7px'}}>  {vaccines.length} Vaccines</p>
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
