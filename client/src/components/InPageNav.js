import React from 'react'
import {Nav, Button} from 'react-bootstrap'
import '../pages/ComponentStyles/container.css'

const InPageNav = (props) => {

  const {auth} = props

  const userButtonsLeft = () => {
		if(auth?.user)
		return(
			<>
				{auth.user?.first_name &&
					<Nav.Link style = {{width: 'auto', marginTop: '10px'}} href="/users/self">
							{auth.user.first_name} {auth.user.last_name}
					</Nav.Link>
				}
				{(auth.user?.name && !auth.user?.first_name) &&
					<Nav.Link style = {{width: 'auto', marginTop: '10px'}} href="/users/self">
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

  return (
    <div style={{background: 'white', display: 'flex', flexDirection: 'row', alignContent: 'center', margin: 'auto', height: '60px'}}>
				<div className="leftalign">{userButtonsLeft()}</div>
				<Nav className="navbar2" >
					<Nav.Link active style = {{width: '130px', textAlign: "center"}} href="/users/allVaccines">All Vaccines</Nav.Link>
          <h3 style={{color: 'lightgrey', marginTop: '0px', marginBottom: '0px'}}>|</h3>
					<Nav.Link active style = {{width: '130px', textAlign: "center"}} href="/">All Verifiers</Nav.Link>
				</Nav>
				<div className="rightAlign">{userButtonsRight()}</div>
		</div>
  )
}

export default InPageNav
