import React from 'react'
import {Nav, Button, Navbar, Col, Row} from 'react-bootstrap'
import '../pages/ComponentStyles/container.css'
import {useLocation} from 'react-router'
import useWindowDimensions from './useWindowDimensions'

const InPageNavNoCenter = (props) => {

  const {auth} = props
	const location = useLocation()
	const {width} = useWindowDimensions()
	const hide = (width <= 760)

  const userButtonsLeft = () => {
		if(auth?.user)
		return(
			<>
				{auth.user?.first_name &&
					<Nav.Link style = {{width: 'auto', margin: '10px 0px 10px 10px'}} href="/users/self">
							{auth.user.first_name} {auth.user.last_name}
					</Nav.Link>
				}
				{(auth.user?.name && !auth.user?.first_name) &&
					<Nav.Link style = {{width: 'auto', margin: '10px 0px 10px 10px'}} href="/users/self">
							{auth.user.name}
					</Nav.Link>
				}
			</>
		)
	}

	const userButtonsRight = () => {
		if(auth?.user)
		return(
			<>
				{auth.user?.role === "verifier" &&
					<>
						<Nav.Link style = {{width: 'auto'}} href="/">
								<Button style={{margin: '0px'}}>Home</Button>
						</Nav.Link>
					</>
				}
        {auth.user?.role === "user" &&
					<>
						<Nav.Link style = {{width: 'auto'}} href="/">
								<Button style={{margin: '0px'}}>Home</Button>
						</Nav.Link>
					</>
				}
        {auth.user?.role === "issuer" &&
					<>
						<Nav.Link style = {{width: 'auto'}} href="/users/issuer/vaccines">
								<Button style={{margin: '0px'}}>Issue Vaccination</Button>
						</Nav.Link>
						<Nav.Link style = {{width: 'auto'}} href="/users/issuer/manage">
							<Button style={{marginLeft: '-20px'}}>Manage Vaccinations</Button>
						</Nav.Link>
					</>
				}
			</>
		)
	}

	const navMiddleLinks = () => {
		if(auth?.user)
		return(
			<>
				{auth.user?.role === "verifier" &&
					<>
						<Nav.Link href="/users/verifier/requiredVaccines" style={{ marginTop: '0px', marginBottom: '0px'}}>
							Add Required
						</Nav.Link>
						<Nav.Link href="/users/verifier/QRScanner" style={{ marginTop: '0px', marginBottom: '0px'}}>
							Scan QR
						</Nav.Link>
					</>
				}
        {auth.user?.role === "user" &&
					<>
						<Nav.Link href="/users/self/" style={{ marginTop: '0px', marginBottom: '0px'}}>
							My Dashboard
						</Nav.Link>
						<Nav.Link href="/users/self/qr_code" style={{ marginTop: '0px', marginBottom: '0px'}}>
							My QR Code
						</Nav.Link>
					</>
				}
        {auth.user?.role === "issuer" &&
					<>
						<Nav.Link href="/users/issuer/vaccines" style={{ marginTop: '0px', marginBottom: '0px'}}>
								Issue Vaccination
						</Nav.Link>
						<Nav.Link href="/users/issuer/manage" style={{ marginTop: '0px', marginBottom: '0px'}}>
							Manage Vaccinations
						</Nav.Link>
					</>
				}
			</>
		)

	}

	const navMiddleLinks = () => {
		if(auth?.user)
		return(
			<>
				{auth.user?.role === "verifier" &&
					<>
						<Nav.Link href="/users/verifier/requiredVaccines" style={{ marginTop: '0px', marginBottom: '0px'}}>
							Add Required
						</Nav.Link>
						<Nav.Link href="/users/verifier/QRScanner" style={{ marginTop: '0px', marginBottom: '0px'}}>
							Scan QR
						</Nav.Link>
					</>
				}
        {auth.user?.role === "user" &&
					<>
						<Nav.Link href="/users/self/" style={{ marginTop: '0px', marginBottom: '0px'}}>
							My Dashboard
						</Nav.Link>
						<Nav.Link href="/users/self/qr_code" style={{ marginTop: '0px', marginBottom: '0px'}}>
							My QR Code
						</Nav.Link>
					</>
				}
        {auth.user?.role === "issuer" &&
					<>
						<Nav.Link href="/users/issuer/vaccines" style={{ marginTop: '0px', marginBottom: '0px'}}>
								Issue Vaccination
						</Nav.Link>
						<Nav.Link href="/users/issuer/manage" style={{ marginTop: '0px', marginBottom: '0px'}}>
							Manage Vaccinations
						</Nav.Link>
					</>
				}
			</>
		)

	}
 
  return (
			<Navbar bg="white" expand="lg" variant="light">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			<Nav style={{width: '100%'}}>
				<Row style={{width: '100%'}}>
					<Col className="leftnavcol">
						<Nav>
							{hide === false && userButtonsLeft()}
						</Nav>
					</Col>
					<Col className="centernavcol">
						<Nav activeKey={location.pathname}>
							{navMiddleLinks()}
						</Nav>
					</Col>
					<Col className="rightnavcol">
						<Nav>
							{hide === false && userButtonsRight()}
						</Nav>
					</Col>
				</Row>
			</Nav>
			</Navbar.Collapse>
		</Navbar>		

  )
}

export default InPageNavNoCenter
