import React, {useState} from 'react'
import {Card, Modal, Button} from 'react-bootstrap'
import UploadVaccImage from './UploadVaccImage'
import '../ComponentStyles/container.css'

const UserVaccine = (props) => {

  const {vaccination, vaccine_id, vaccine_name, manufacturer, vaccination_id, issuer_name, getVaccinations} = props

  //modal vars
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    //modal specific for uploading image in page
    const pictureUploadModal = () => {
      return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Upload Vaccine Image
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Upload Vaccine Image Here</Modal.Title>
            </Modal.Header>
            <Modal.Body><UploadVaccImage handleClose={handleClose} vaccination={vaccination} getVaccinations={getVaccinations} vaccination_id={vaccination_id}/></Modal.Body>
          </Modal>
        </>
      );
    }

  return(
    <div key={vaccine_id}>
      <Card style={{ width: '15rem' }} style={{margin: '10px'}}>
        <Card.Body>
        <Card.Img variant="top" src={vaccination.image} />
          <Card.Title><h3>Vaccination: {vaccine_name}</h3></Card.Title>
          <Card.Text>
            MFG: {manufacturer}
          </Card.Text>
          <Card.Text>
            id: {vaccine_id}
          </Card.Text>
          <Card.Text>
            Issuer: {issuer_name}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          {pictureUploadModal()}
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserVaccine
