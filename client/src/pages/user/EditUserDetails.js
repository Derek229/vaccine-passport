import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import axios from 'axios'

// import {useHistory} from 'react-router-dom'

const EditUserDetails = (props) => {

  const {user, setUser, getUserData} = props


  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    getUserData()
  }
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
            {(user.role === "user") &&
              <div>
                <Form.Group>
                  <Form.Control
                    label="First Name"
                    autoFocus
                    required         
                    name='first_name'
                    value={user.first_name}
                    placeholder={user?.first_name ? user.first_name : "First Name"}
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
                    placeholder={user?.last_name ? user.last_name : "Last Name"}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            }
            {(user.role !== "user") &&
              <div>
                <Form.Group>
                  <Form.Control
                    label="Name"
                    autoFocus
                    required         
                    name='name'
                    value={user.name}
                    placeholder={user?.name ? user.name : "Name"}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            }
						{(user.role === "user") &&
              <div>
                <Form.Group>
                  <Form.Control
                    label="Age"
                    autoFocus
                    required         
                    name='age'
                    value={user.age}
                    placeholder={user?.age ? user.age : "Age"}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            }
						{(user.role === "user") &&
              <div>
                <Form.Group>
                  <Form.Control
                    label="Gender"
                    autoFocus
                    required         
                    name='gender'
                    value={user.gender}
                    placeholder={user?.gender ? user.gender : "Gender"}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            }
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
