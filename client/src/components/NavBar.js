import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class Navbar1 extends React.Component {
  
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
      return (
        <>
        <Nav.Link href="/">
          Login
        </Nav.Link>
        <Nav.Link href="/Register">
          Register
        </Nav.Link>
        </>
      )
    }
  
  }

  render() {
    return (
      <div>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Navbar.Brand href="/">COVIDIA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={this.props.location.pathname} className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              {this.props.auth.user?.role == "user" &&
                <Nav.Link href="/users/self/wallet">My QR Code</Nav.Link>
              } 
              {this.props.auth.user?.role == "issuer" &&
                <Nav.Link href="/users/issuer/vaccines">Issuer Vaccines</Nav.Link>
              }
              {this.props.auth.user?.role == "verifier" &&
                <Nav.Link href="/users/verifier/required">Verifier Vaccines</Nav.Link>
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
