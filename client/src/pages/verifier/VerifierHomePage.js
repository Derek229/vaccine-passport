import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../../components/ContainerVerifier.css';
import { AuthContext } from '../../providers/AuthProvider';
import "../ComponentStyles/container.css"
import Syringe from '../../Vaccine Passport Icons/syringe.png'
import QRCode from '../../Vaccine Passport Icons/qr-code.png'
function VerifierHomePage() {


  const auth = useContext(AuthContext)

  
  return (
    <div className="div">
    <div className="divcontainer">
      <h1>Welcome {auth.user.name}</h1>
      <Row style={{flexWrap: 'wrap', width: '100%', height: 'auto', paddingTop: '30px', paddingBottom: '30px', padding: '15px'}}>
        <Col>
        <a href="/users/verifier/requiredVaccines" style={{textDecoration: "none"}}>
          <Card className="card2" style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
            <Card.Img style={{ maxWidth: "100%", margin: '50px 30px 35px 30px'}} variant="middle" src={Syringe}/>
            <Button style={{margin: '15px 20px 25px 20px', padding: '20px 0 20px 0', fontSize: '17px'}}  href="/users/verifier/requiredVaccines">Go to Required Vaccines</Button>
          </Card>
        </a>
        </Col>
        <Col>
          <a href="/users/verifier/QRScanner" style={{textDecoration: "none"}}>
          <Card className="card2" style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
          <Card.Img style={{ maxWidth: "100%", margin: '50px 30px 35px 30px'}} variant="middle" src={QRCode}/>
            <Button style={{margin: '15px 20px 25px 20px', padding: '20px 0 20px 0', fontSize: '17px'}} href="/users/verifier/QRScanner">Go to QR Scanner</Button>
          </Card>
          </a>
        </Col>
      </Row>
    </div>
  </div>
  
  )
}

export default VerifierHomePage
