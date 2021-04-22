import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'

const IssuerHomePage = () => {
  return (
  <>
  <Card style={{ padding:'50px', margin: 10, alignContent:'center' }}>
    <div>
      <h1>Issuer Home Page</h1>
    </div>
    
    <CardGroup>
      <div>
        <Card style={{ width: '18rem', padding:'50px', margin: 10 }}>
          <Card.Img variant="center" src="https://cdn.pixabay.com/photo/2020/12/13/19/43/syringe-5829177_1280.png" />
          <Card.Body>
            <Button style={{marginLeft: 10}} href="/users/issuer/vaccines">Issue Vaccination</Button>
          </Card.Body>      
        </Card>
      </div>
      <div>
        <Card style={{ width: '18rem', padding:'50px', margin: 10 }}>
          <Card.Img variant="top" src="https://www.pngrepo.com/png/263757/512/clipboard-list.png" />
          <Card.Body>
            <Button style={{marginLeft: 10}} href="/users/issuer/manage">Manage Vaccinations</Button>
          </Card.Body>
        </Card>
      </div>
    </CardGroup>
  </Card>
  </>
  )
}

export default IssuerHomePage


{/* <div>
<Card.Text>
Issue Vaccination

</Card.Text>

<Card.Text>
Manage Vaccinations
  
</Card.Text>

</div> */}


{/* <div>
<CardGroup> 
<Card.Header>Issuer Home Page</Card.Header>
<Card>
  <div>
    <Button href="/users/issuer/vaccines">Issue Vaccination</Button>

    <Button style={{marginLeft: 10}} href="/users/issuer/manage">Manage Vaccinations</Button>
  </div>
</Card>
</CardGroup>
</div> */}