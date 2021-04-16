import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const EditUserDetails = (props) => {

  const {user, setUser} = props

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.put(`/api/users/${user.id}`, user)
    console.log('submitted: ', res)
    handleClose()
  }

  const userEditForm = () => {
    return(
      <>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              label="First Name"
              autoFocus
              required         
              name='first_name'
              value={user.first_name}
              placeholder={user.first_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              label="Last Name"
              autoFocus
              required         
              name='last_name'
              value={user.last_name}
              placeholder={user.last_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              label="Email"
              required
              name='email'
              value={user.email}
              placeholder='Email'
              type='email'
              onChange={handleChange}
            /> 
            <Form.Text className="text-muted">
            Note: changing your email will require you to sign in again.
            </Form.Text>
          </Form.Group>
            <Button type='submit'>Submit</Button>
        </Form>
    </>
    )
  }

  const editFormModal = () => {
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit User Details
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>{userEditForm()}</Modal.Body>
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
    <div>
      {editFormModal()}
    </div>
  )
}

export default EditUserDetails
