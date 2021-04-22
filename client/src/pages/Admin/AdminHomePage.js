import React from 'react'
import { Button, Container, Col, Row, Card } from 'react-bootstrap'

import "../ComponentStyles/container.css";

const AdminHomePage = () => {
  return (
    <div className="div">
      <Container className="divcontainer">
        <h1>Admin</h1>
        <Row style={{width: '100%'}}>
          <Col>
            <Card style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
              <Card.Img variant="middle" src="https://mpng.subpng.com/20180421/obq/kisspng-injection-computer-icons-medicine-health-care-syri-shot-clipart-5adadcb3673e06.9413091315242927874229.jpg"/>
              <Button href="/admin/vaccines">Admin Vaccines</Button>
            </Card>
          </Col>
          <Col>
            <Card style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
              <Card.Img variant="middle" src="https://mpng.subpng.com/20180421/obq/kisspng-injection-computer-icons-medicine-health-care-syri-shot-clipart-5adadcb3673e06.9413091315242927874229.jpg"/>
              <Button href="/admin/vaccinations">Admin Vaccinations</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AdminHomePage