import React, {useContext} from 'react'
import {Row, Col, Button, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { useLocation } from 'react-router'
import '../ComponentStyles/container.css'
import AuthContext from '../../providers/AuthProvider'

const UserNav = (props) => {

  const auth = useContext(AuthContext)
  const location = useLocation()

  const {user, setShowProfile, setShowVaccines} = props

  return (
    <div>
      <Navbar bg="white" expand="lg" variant="light">
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav style={{width: '100%'}}>
        <Row style={{width: '100%'}}>
          <Col className="leftnavcol">
            <Nav>
            {user?.role === "user" ? 
              <Nav.Link style={{margin: '10px 0 0 50px'}}>{user?.first_name} {user?.last_name}</Nav.Link> 
            : 
              <Nav.Link style={{margin: '10px 0 0 100px'}}>{user?.name}</Nav.Link>
            }
            </Nav>
          </Col>
          <Col className="centernavcol">
            <Nav activeKey={location.pathname}>
            {user.role === "user" && 
              <>
                <Nav.Link 
                  style = {{textAlign: "center"}} 
                  href="#profile"
                  onClick={() => {
                    setShowProfile(true)
                    setShowVaccines(false)
                  }}
                >
                  My Profile
                </Nav.Link>
                <Nav.Link 
                  style = {{textAlign: "center"}} 
                  href="#vaccines"
                  onClick={() => {
                    setShowProfile(false)
                    setShowVaccines(true)
                  }}
                >
                  My Vaccines
                </Nav.Link>
                <Nav.Link style={{textAlign: "center"}} href="/users/self/qr_code">My QR Code</Nav.Link>
              </>
              }
              {user.role === "verifier" &&
                <>
                  <Nav.Link href="/users/verifier/requiredVaccines" style={{ marginTop: '0px', marginBottom: '0px'}}>
                    Required Vaccines
                  </Nav.Link>
                  <Nav.Link href="/users/verifier/QRScanner" style={{ marginTop: '0px', marginBottom: '0px'}}>
                    Scan QR
                  </Nav.Link>
                </>
              }
              {user.role === "issuer" &&
                <>
                  <Nav.Link href="/users/issuer/vaccines" style={{ marginTop: '0px', marginBottom: '0px'}}>
                      Issue Vaccination
                  </Nav.Link>
                  <Nav.Link href="/users/issuer/manage" style={{ marginTop: '0px', marginBottom: '0px'}}>
                    Manage Vaccinations
                  </Nav.Link>
                </>
              }
              {user.role === "admin" && 
                <>
                  <Nav.Link href="/admin/vaccines" style={{ marginTop: '10px', marginBottom: '10px'}}>
                    Manage Vaccines
                  </Nav.Link>
                  <Nav.Link href="/admin/vaccinations" style={{ marginTop: '10px', marginBottom: '10px'}}>
                    Manage Vaccinations
                  </Nav.Link>
                </>
              }
            </Nav>
          </Col>
          <Col className="rightnavcol">
            <Nav>
            {user.role === "user" &&
              <Button style= {{margin: '10px 50px 10px 10px'}} href="/">Return Home</Button>
            }
            {(user.role === "verifier" || user.role === "issuer") &&
              <Button style= {{margin: '10px 20px 10px 10px'}} href="/">Return Home</Button>
            }
            {user.role === "admin" &&
              <NavDropdown title="Menu" id="basic-nav-dropdown" style={{margin: '0px 100px 0px 20px'}}>
                <NavDropdown.Item href="/users/issuer/vaccines">Issue Vaccination</NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item href="/users/verifier/requiredVaccines">Required Vaccines</NavDropdown.Item>
                <NavDropdown.Item href="/users/verifier/QRScanner">QR Scanner</NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item href="/users/self/qr_code">My QR Code</NavDropdown.Item>
              </NavDropdown>
              
            }
            </Nav>
          </Col>
        </Row>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default UserNav
