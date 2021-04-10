import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import {Button, Container, Modal} from 'react-bootstrap'
import VaccineForm from '../issuer/VaccineForm'
import Vaccine from '../issuer/Vaccine'
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
    // return(
    //   <>
    //   <div>
		//   <Button onClick={()=> setOpen(true)}>Add a New Vaccine</Button>
		// 	<Modal
    //     onClose={() => setOpen(false)}
    //     onOpen={() => setOpen(true)}
    //     open={open}
    //   >
    //     <Modal.Header>Add a New Vaccine</Modal.Header>
    //     <Modal.Content>
    //       <Modal.Description>
    //         {/* pass setOpen so modal will close on submit, pass addVaccine to add new vaccine to array */}
    //         <VaccineForm setOpen={setOpen} addVaccine={addVaccine}/>
    //       </Modal.Description>
    //       </Modal.Content>
    //     <Modal.Actions>
    //       <Button color='black' onClick={() => setOpen(false)}>
    //         Close Form
    //       </Button>
    //     </Modal.Actions>
    //   </Modal>
    //   </div>
    //   </>
    //   )
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
