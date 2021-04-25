import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import LogoOnly from '../Logos/Covidia_LogOnly_T.png'
import '../pages/ComponentStyles/container.css'

class Navbar1 extends React.Component {

  state={
    showRightNavButtons: false, 
  }
  
  rightNavItems = () => {
    const { auth: { user, handleLogout } } = this.props;
    
    if (user) {
      return (
        <>
        {user?.first_name &&
          <Nav.Link href="/users/self">
            {user.first_name} {user.last_name}
          </Nav.Link>
        }
        {(user?.name && !user?.first_name) &&
          <Nav.Link href="/users/self">
            {user.name}
          </Nav.Link>
        }
        {(!user?.name && !user?.first_name) &&
          <Nav.Link href="/users/self">
            My Profile
          </Nav.Link>
        }
          <Nav.Link>
          <Nav.Item onClick={() => handleLogout(this.props.history)}>
            Logout
          </Nav.Item>
          </Nav.Link>
        </>
      )
    } else {
      setTimeout(() => {
        this.setState({ showRightNavButtons: true })
      }, 500);
      if(this.state.showRightNavButtons === true){
        return (
          <>
          <Nav.Link href="/register">
            <Button className= "fade-in-navbutton" style={{padding: '5px 20px 5px 20px', backgroundColor: 'white', color: '#262626'}}>Sign Up</Button>
          </Nav.Link>
          <Nav.Link href="/Login">
            <Button className= "fade-in-navbutton" style={{padding: '5px 22px 5px 22px'}}>Sign In</Button>
          </Nav.Link>
          </>
        )
      }
    }
  
  }

  

  render() {
    return (
      <div>
        <Navbar bg="secondary" expand="lg" variant="dark">
          <Navbar.Brand href="/"><img src={LogoOnly} style={{height: '45px'}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={this.props.location.pathname} className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link style = {{width: '130px'}} href="/users/allVaccines">All Vaccines</Nav.Link>
              
              {this.props.auth.user?.role === "issuer" &&
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/users/issuer/vaccines">Issue Vaccination</NavDropdown.Item>
                  <NavDropdown.Item href="/users/issuer/manage">Manage Vaccinations</NavDropdown.Item>
                </NavDropdown>
              }
              {this.props.auth.user?.role === "verifier" &&
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/users/verifier/requiredVaccines">Required Vaccines List</NavDropdown.Item>
                  <NavDropdown.Item href="/users/verifier/QRScanner">QR Scanner</NavDropdown.Item>
                  
                </NavDropdown>
              }
              {this.props.auth.user?.role === "admin" &&
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/admin/vaccines">Admin Vaccines</NavDropdown.Item>
                  <NavDropdown.Item href="/admin/vaccinations">Admin Vaccinations</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/users/issuer/vaccines">Issue Vaccination</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/users/verifier/requiredVaccines">Required Vaccines</NavDropdown.Item>
                  <NavDropdown.Item href="/users/verifier/QRScanner">QR Scanner</NavDropdown.Item>
                </NavDropdown>
              }
            </Nav>
          <Nav activeKey={this.props.location.pathname} className="justify-content-end" style={{ width: "100%" }}>
            {this.rightNavItems()}
          </Nav>
          </Navbar.Collapse>
          </Navbar>
      </div>
    )
  }
}
    

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar1 { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
