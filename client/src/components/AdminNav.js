import React, {useContext} from 'react'
import {Button, Nav, NavDropdown, Navbar, Row, Col} from 'react-bootstrap'
import {AuthContext} from '../providers/AuthProvider'
import '../pages/ComponentStyles/container.css'
import { useLocation } from 'react-router'

const AdminNav = () => {

  const auth = useContext(AuthContext)
  const location = useLocation()

  return(
		<Navbar bg="white" expand="lg" variant="light">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			<Nav style={{width: '100%'}}>
				<Row style={{width: '100%'}}>
					<Col className="leftnavcol">
						<Nav>
							<Nav.Link style={{margin: '10px 0px 10px 100px'}} href="/users/self">{auth?.user.name}</Nav.Link>
						</Nav>
					</Col>
					<Col className="centernavcol">
						<Nav activeKey={location.pathname}>
              <Nav.Link 
                style = {{width: 'auto', textAlign: "center"}} 
                href="/admin/vaccines"
              >
                Admin Vaccines
              </Nav.Link>
              <h3 style={{color: 'lightgrey', marginTop: '0px', marginBottom: '0px'}}>|</h3>
              <Nav.Link 
                style = {{width: 'auto', textAlign: "center"}} 
                href="/admin/vaccinations"
              >
                Admin Vaccinations
              </Nav.Link>
						</Nav>
					</Col>
					<Col className="rightnavcol">
						<Nav>
            <NavDropdown title="Menu" id="basic-nav-dropdown" style={{marginRight: '100px'}}>
              <NavDropdown.Item href="/users/issuer/vaccines">Issue Vaccination</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/users/verifier/requiredVaccines">Required Vaccines</NavDropdown.Item>
              <NavDropdown.Item href="/users/verifier/QRScanner">QR Scanner</NavDropdown.Item>
            </NavDropdown>
						</Nav>
					</Col>
				</Row>
			</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default AdminNav
