import React, {useState} from 'react'
import {Card, Modal, Form, Button} from 'react-bootstrap'

const UserVaccine = (props) => {

  const {vaccine_id, vaccine_name, manufacturer} = props

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
            <Modal.Body>FILEPOND here</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

  return(
    <div key={vaccine_id}>
      <Card >
        <Card.Body>
          <Card.Title><h3>Vaccination: {vaccine_name}</h3></Card.Title>
          <Card.Text>
            MFG: {manufacturer}
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
