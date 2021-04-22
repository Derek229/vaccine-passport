import React from 'react'
import { Button, Container, Col, Row, Card } from 'react-bootstrap'

import "../ComponentStyles/container.css";

const AdminHomePage = () => {
  return (
    <Container>
      <div className="div">
        <Container className="divcontainer">
          <h1>Admin</h1>
          <Row style={{width: '100%'}}>
            <Col>
              <Card border="primary" style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
                <Card.Img style={{maxHeight: "300px", maxWidth: "100%"}} variant="middle" src="https://freepngimg.com/thumb/syringe/2-2-syringe-picture-thumb.png"/>
                <Button style={{marginTop: '10px'}}  href="/admin/vaccines">Admin Vaccines</Button>
              </Card>
            </Col>
            <Col>
              <Card border="primary" style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
                <Card.Img style={{maxHeight: "300px", maxWidth: "100%"}} variant="middle" src="https://img.pngio.com/checklist-poll-task-to-do-list-clipboard-svg-png-icon-free-to-do-list-png-708_980.png"/>
                <Button style={{marginTop: '10px'}} href="/admin/vaccinations">Admin Vaccinations</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  )
}

export default AdminHomePage