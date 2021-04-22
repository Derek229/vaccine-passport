import React from 'react'
import { Button } from 'react-bootstrap'

const IssuerHomePage = () => {
  return (
    <div>
      <h1>Logged in as role: Issuer</h1>
      <Button href="/users/issuer/vaccines">Issue Vaccination</Button>
      <Button style={{marginLeft: 10}} href="/users/issuer/manage">Manage Vaccinations</Button>
    </div>
  )
}

export default IssuerHomePage
