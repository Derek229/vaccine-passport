import React, {useContext} from 'react'
import {Button, Nav, NavDropdown, Navbar, Row, Col} from 'react-bootstrap'
import {AuthContext} from '../providers/AuthProvider'
import '../pages/ComponentStyles/container.css'
import { useLocation } from 'react-router'

const VerifierNav = () => {

  const auth = useContext(AuthContext)
  const location = useLocation()

  return(
		<Navbar bg="white" expand="lg" variant="light">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			<Nav style={{width: '100%'}}>
				<Row style={{width: '80%'}}>
					<Col>
						<Nav>
							<Nav.Link style={{margin: '10px 0px 10px 50px'}} href="/users/self">{auth?.user.name}</Nav.Link>
						</Nav>
					</Col>
					<Col>
						<Nav activeKey={location.pathname}>
              <Nav.Link 
                style = {{width: 'auto', textAlign: "center",  marginTop:'10px'}} 
                href="/users/verifier/QRScanner"
              >
               QR Scanner
              </Nav.Link>
              <Nav.Link 
                style = {{width: 'auto', textAlign: "center", marginTop:'10px'}} 
                href="/users/verifier/requiredVaccines"
              >
                Required Vaccines page
              </Nav.Link>
						</Nav>
					</Col>
				</Row>
			</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default VerifierNav