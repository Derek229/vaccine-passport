import React, { useContext } from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import { AuthContext } from '../../providers/AuthProvider';
import QRIcon from '../../Vaccine Passport Icons/black-24dp/2x/baseline_qr_code_scanner_black_24dp.png'
import Person from '../../Vaccine Passport Icons/employee.png'
import "../ComponentStyles/container.css";
import QRCode from 'qrcode.react'
import useWindowDimensions from '../../components/useWindowDimensions';

const UserHomePage = () => {

  const {width} = useWindowDimensions()
  const hide = (width <= 760)
  const auth = useContext(AuthContext)

  return (
    <div className="div">
        {hide === false &&
          <div className="divcontainer">
            <h1 style={{textAlign: 'center'}}>Welcome {auth.user.first_name}</h1>
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
        }
        {hide === true &&
        <Card style={{padding: '5% 2%', margin: '30px 0px'}}>
          <div className="centernav">
            <h1 style={{textAlign: 'center'}}>Welcome {auth.user.first_name}</h1>
            <img src={Person} style={{maxWidth: '100px'}}/>
            <Button style={{marginTop: '10px'}}  href="/users/self">My Dashboard</Button>
            <QRCode value={auth.user.id} includeMargin={false} imageSettings="center" style={{maxWidth: '100px', maxHeight: '100px', margin: '15px 0 15px 0'}}/>
            <Button style={{marginTop: '10px'}} href="/users/self/qr_code">My QR Code</Button>
          </div>
          </Card>
        }
      </div>
)
}

export default UserHomePage
