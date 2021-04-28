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
  const hide = (width <= 950)
  const auth = useContext(AuthContext)

  return (
    <div className="div">
        {hide === false &&
          <div className="divcontainer">
            <h1 style={{textAlign: 'center'}}>Welcome {auth.user.first_name}</h1>
            <Row style={{flexWrap: 'wrap', width: '100%', height: 'auto', paddingTop: '30px', paddingBottom: '30px', padding: '15px'}}>
              <Col>
              <a href="/users/self" style={{textDecoration: "none"}}>
                <Card className="card2" style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
                  <Card.Img style={{ maxWidth: "100%", margin: '50px 30px 35px 30px'}} variant="middle" src={Person}/>
                  <Button style={{margin: '15px 20px 25px 20px', padding: '20px 0 20px 0', fontSize: '20px'}}  href="/users/self">My Dashboard</Button>
                </Card>
              </a>
              </Col>
              <Col>
              <a href="/users/self/qr_code" style={{textDecoration: "none"}}>
                <Card className="card2" style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
                  <QRCode value={auth.user.id} includeMargin={false} imageSettings="center" style={{height: 'auto', width: 'auto', margin: '75px 50px 50px 50px'}}/>
                  <Button style={{margin: '15px 20px 25px 20px', padding: '20px 0 20px 0', fontSize: '20px'}} href="/users/self/qr_code">My QR Code</Button>
                </Card>
              </a>
              </Col>
            </Row>
          </div> 
        }
        {hide === true &&
        <Card style={{padding: '5% 2%', margin: '30px 0px'}}>
          <div className="centernav">
            <h1 style={{textAlign: 'center'}}>Welcome {auth.user.first_name}</h1>
            <a href="/users/self" style={{textDecoration: "none"}}>
            <img src={Person} style={{maxWidth: '100px'}}/>
            <Button style={{marginTop: '10px'}}  href="/users/self">My Dashboard</Button>
            </a>
            <a href="/users/self/qr_code" style={{textDecoration: "none"}}>
            <QRCode value={auth.user.id} includeMargin={false} imageSettings="center" style={{maxWidth: '60px', maxHeight: '60px', margin: '40px 10px 0 10px'}}/>
            <Button style={{margin: '0px 0 40px 10px'}} href="/users/self/qr_code">My QR Code</Button>
            </a>
          </div>
          </Card>
        }
      </div>
)
}

export default UserHomePage
