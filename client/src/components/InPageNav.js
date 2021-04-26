import React from 'react'
import {Nav, Button, Navbar, Row, Col, Container} from 'react-bootstrap'
import { useLocation } from 'react-router'
import '../pages/ComponentStyles/container.css'

const InPageNav = (props) => {

  const {auth} = props
	const location = useLocation()

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

	const userButtonsRight = () => {
		if(auth?.user)
		return(
			<>
				{auth.user?.role === "verifier" &&
					<div className="rightalign">
						<Nav.Link style = {{width: 'auto', marginTop: '3px'}} href="/users/verifier/QRScanner">
								<Button style={{margin: '0px'}}>Scan QR</Button>
						</Nav.Link>
						<Nav.Link style = {{width: 'auto', marginTop: '3px'}} href="/users/verifier/requiredVaccines">
							<Button style={{marginLeft: '-20px'}}>Add Required</Button>
						</Nav.Link>
					</div>
				}
        {auth.user?.role === "user" &&
					<div className="rightalign">
						<Nav.Link style = {{width: 'auto', marginTop: '3px'}} href="/users/self">
								<Button style={{margin: '0px'}}>Dashboard</Button>
						</Nav.Link>
						<Nav.Link style = {{width: 'auto', marginTop: '3px'}} href="/users/self/qr_code">
							<Button style={{marginLeft: '-20px'}}>QR Code</Button>
						</Nav.Link>
					</div>
				}
        {auth.user?.role === "issuer" &&
					<div className="rightalign">
						<Nav.Link style = {{width: 'auto', marginTop: '3px'}} href="/users/issuer/vaccines">
								<Button style={{margin: '0px'}}>Issue Vaccination</Button>
						</Nav.Link>
						<Nav.Link style = {{width: 'auto', marginTop: '3px'}} href="/users/issuer/manage">
							<Button style={{marginLeft: '-20px'}}>Manage Vaccinations</Button>
						</Nav.Link>
					</div>
				}
			</>
		)
	}

	return(
		<Navbar bg="white" expand="lg" variant="light">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			<Nav style={{width: '100%'}}>
				<Row style={{width: '100%'}}>
					<Col className="leftnavcol">
						<Nav>
							<Nav.Link style={{width: 'auto', margin: '10px 0px 0px 60px'}} href="/users/self">{userButtonsLeft()}</Nav.Link>
						</Nav>
					</Col>
					<Col className="centernavcol">
						<Nav activeKey={location.pathname}>
							<Nav.Link 
								style = {{width: 'auto', textAlign: "center"}} 
								href="/users/allVaccines"
							>
								All Vaccines
							</Nav.Link>
							<Nav.Link  
								style = {{width: 'auto', textAlign: "center"}} 
								href="/"
							>
								All Verifiers
							</Nav.Link>
						</Nav>
					</Col>
					<Col className="rightnavcol">
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
					</Col>
				</Row>
			</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default InPageNav
