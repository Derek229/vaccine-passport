import React from 'react'
import {Nav, Button, Navbar, Row, Col} from 'react-bootstrap'
import { useLocation } from 'react-router'
import '../pages/ComponentStyles/container.css'
import useWindowDimensions from './useWindowDimensions'

const InPageNav = (props) => {

  const {auth} = props
	const location = useLocation()
	const {width} = useWindowDimensions()
	const hide = (width <= 760)

  const userButtonsLeft = () => {
		if(auth?.user){
			if(auth.user?.first_name){
				return(
					<>
					{auth.user.first_name} {auth.user.last_name}
					</>
				)
			}else{
				return(
					<>
						{auth.user.name}
					</>

				)
			}

		}
	}

	return(
		<Navbar bg="white" expand="lg" variant="light">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			<Nav style={{width: '100%'}}>
				<Row style={{width: '100%'}}>
					{hide === false && <Col className="leftnavcol">
						<Nav>
							<Nav.Link style={{width: 'auto', margin: '10px 0px 0px 60px'}} href="/users/self">{userButtonsLeft()}</Nav.Link>
						</Nav>
					</Col>}
					<Col className="centernavcol" style={{marginRight: '-20px'}}>
						<Nav activeKey={location.pathname}>
							{hide === true &&
							<>
							<Nav.Link 
								style = {{width: 'auto', textAlign: "center"}} 
								href="/"
							>
								Home
							</Nav.Link>
							{!auth.user?.role && 
							<Nav.Link  
								style = {{width: 'auto', textAlign: "center"}} 
								href="/about"
							>
								About
							</Nav.Link>}
							</>}
							<Nav.Link 
								style = {{width: 'auto', textAlign: "center"}} 
								href="/all-vaccines"
							>
								All Vaccines
							</Nav.Link>
							<Nav.Link  
								style = {{width: 'auto', textAlign: "center"}} 
								href="/all-verifiers"
							>
								All Verifiers
							</Nav.Link>
						</Nav>
					</Col>
					{hide === false && <Col className="rightnavcol">
						<Nav>
							{auth.user?.role === "verifier" &&
								<>
									<Nav.Link style = {{width: 'auto', marginTop: '3px', marginLeft: '10px'}} href="/users/verifier/QRScanner">
											<Button style={{margin: '0px'}}>Scan QR</Button>
									</Nav.Link>
									<Nav.Link style = {{width: 'auto', marginTop: '3px', marginLeft: '10px'}} href="/users/verifier/requiredVaccines">
										<Button >Add Required</Button>
									</Nav.Link>
								</>
							}
							{auth.user?.role === "user" &&
								<>
									<Nav.Link style = {{width: 'auto', margin: '0 0 0 10px' }} href="/users/self">
											<Button >Dashboard</Button>
									</Nav.Link>
									<Nav.Link style = {{width: 'auto', margin: '0 0 0 10px' }} href="/users/self/qr_code">
										<Button style={{marginRight: '0'}}>QR Code</Button>
									</Nav.Link>
								</>
							}
							{auth.user?.role === "issuer" &&
								<>
									<Nav.Link style = {{width: 'auto', marginTop: '3px'}} href="/users/issuer/vaccines">
											<Button>Issue Vaccination</Button>
									</Nav.Link>
									<Nav.Link style = {{width: 'auto', marginTop: '3px', marginLeft: '10px'}} href="/users/issuer/manage">
										<Button >Manage Vaccinations</Button>
									</Nav.Link>
								</>
							} 
						</Nav>
					</Col>}
				</Row>
			</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default InPageNav
