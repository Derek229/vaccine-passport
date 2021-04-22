import React from 'react'
import { Button, Container, Col, Row } from 'react-bootstrap'

const AdminHomePage = () => {
  return (
    <>
    <Container>
      <h1>Logged in as role: Admin</h1>
      <Row>
        <Col>
        <h3>Admin Pages: </h3>
          <Button href="/admin/vaccines">Admin Vaccines</Button>
          <Button style={{marginLeft: 10}} href="/admin/vaccinations">Admin Vaccinations</Button>
        </Col>
        <Col>
        <h3>Issuer Pages: </h3>
          <Button href="/users/issuer/vaccines">Issue Vaccination</Button>
        </Col>
        <Col>
        <h3>Verifier Pages: </h3>
          <Button href="/users/verifier/requiredVaccines">Required Vaccines</Button>
          <Button style={{marginLeft: 10}} href="/users/verifier/QRScanner">QR Scanner</Button>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default AdminHomePage