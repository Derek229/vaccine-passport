import React, {useContext} from 'react'
import {Button, Nav, NavDropdown} from 'react-bootstrap'
import {AuthContext} from '../providers/AuthProvider'
import '../pages/ComponentStyles/container.css'

const AdminNav = () => {

  const auth = useContext(AuthContext)

  return (
    <div>
      <div style={{background: 'white', display: 'flex', flexDirection: 'row', alignContent: 'center', margin: 'auto', height: '60px'}}>
        <div className="leftalign"><Nav.Link style={{margin: '10px'}} href="/users/self">{auth?.user.name}</Nav.Link></div>
          <Nav className="navbar2" > 
            <Nav.Link 
              active 
              style = {{width: 'auto', textAlign: "center"}} 
              href="/admin/vaccines"
            >
              Admin Vaccines
            </Nav.Link>
            <h3 style={{color: 'lightgrey', marginTop: '0px', marginBottom: '0px'}}>|</h3>
            <Nav.Link 
              active 
              style = {{width: 'auto', textAlign: "center"}} 
              href="/admin/vaccinations"
            >
              Admin Vaccinations
            </Nav.Link>
          </Nav>
          
          <div className="rightAlign">
            <NavDropdown title="Menu" id="basic-nav-dropdown" style={{margin: '10px'}}>
              <NavDropdown.Item href="/users/issuer/vaccines">Issue Vaccination</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/users/verifier/requiredVaccines">Required Vaccines</NavDropdown.Item>
              <NavDropdown.Item href="/users/verifier/QRScanner">QR Scanner</NavDropdown.Item>
            </NavDropdown>
          </div>
          </div>
      </div> 
  )
}

export default AdminNav
