import React, { useContext } from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import { AuthContext } from '../../providers/AuthProvider';
import QRIcon from '../../Vaccine Passport Icons/black-24dp/2x/baseline_qr_code_scanner_black_24dp.png'
import Person from '../../Vaccine Passport Icons/employee.png'
import "../ComponentStyles/container.css";
import QRCode from 'qrcode.react'

function UserHomePage () {

  const auth = useContext(AuthContext)

  return (
    <div className="div">
      <div className="divcontainer">
        <h1>Welcome {auth.user.first_name}</h1>
        <Row style={{flexWrap: 'wrap', width: '100%', height: 'auto', paddingTop: '30px', paddingBottom: '30px', padding: '15px'}}>
          <Col>
            <Card border="primary" style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
              <Card.Img style={{ maxWidth: "100%", paddingBottom: '15px'}} variant="middle" src={Person}/>
              <Button style={{marginTop: '10px'}}  href="/users/self">My Dashboard</Button>
            </Card>
          </Col>
          <Col>
            <Card border="primary" style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
              <QRCode value={auth.user.id} includeMargin={false} imageSettings="center" style={{height: 'auto', width: 'auto', margin: '0 0 15px 0'}}/>
              <Button style={{marginTop: '10px'}} href="/users/self/qr_code">My QR Code</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
)
}

export default UserHomePage
