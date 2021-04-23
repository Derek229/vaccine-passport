import React from 'react'
import { Button, Container, Col, Row, Card } from 'react-bootstrap'
import Syringe from '../../Vaccine Passport Icons/syringe.png'
import Person from '../../Vaccine Passport Icons/employee.png'
import "../ComponentStyles/container.css";

const AdminHomePage = () => {
  return (
      <div className="div">
        <div className="divcontainer">
          <h1>Admin</h1>
          <Row style={{flexWrap: 'wrap', width: '100%', height: 'auto', paddingTop: '30px', paddingBottom: '30px', padding: '15px'}}>
            <Col>
              <Card border="primary" style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
                <Card.Img style={{ maxWidth: "100%", paddingBottom: '15px'}} variant="middle" src={Syringe}/>
                <Button style={{marginTop: '10px'}}  href="/admin/vaccines">Admin Vaccines</Button>
              </Card>
            </Col>
            <Col>
              <Card border="primary" style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
                <Card.Img style={{ maxWidth: "100%", paddingBottom: '15px'}} variant="middle" src={Person}/>
                <Button style={{marginTop: '10px'}} href="/admin/vaccinations">Admin Vaccinations</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
  )
}

export default AdminHomePage