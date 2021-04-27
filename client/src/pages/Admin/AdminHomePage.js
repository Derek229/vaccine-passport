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
            <a href="/admin/vaccines" style={{textDecoration: "none"}}>
              <Card style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
                <Card.Img style={{ maxWidth: "100%", margin: '50px 30px 35px 30px'}} variant="middle" src={Syringe}/>
                <Button style={{margin: '15px 20px 25px 20px', padding: '20px 0 20px 0', fontSize: '17px'}}  href="/admin/vaccines">Manage Vaccines</Button>
              </Card>
            </a>
            </Col>
            <Col>
              <a href="/admin/vaccinations" style={{textDecoration: "none"}}>
              <Card  style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
                <Card.Img style={{ maxWidth: "100%", margin: '50px 30px 35px 30px'}} variant="middle" src={Person}/>
                <Button style={{margin: '15px 20px 25px 20px', padding: '20px 0 20px 0', fontSize: '17px'}} href="/admin/vaccinations">Manage Vaccinations</Button>
              </Card>
              </a>
            </Col>
          </Row>
        </div>
      </div>
  )
}

export default AdminHomePage