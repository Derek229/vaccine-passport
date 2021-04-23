import React from 'react'
import { Button, Card, CardGroup, Figure } from 'react-bootstrap'
import '../Public/IssuerStyle.css'

const IssuerHomePage = () => {
  return (
  <>
  <Card style={{borderWidth: '1px', padding:'50px', width:'65rem', marginTop: 100}}>
    <div>
      <h1 style={{textAlign: 'center', paddingBottom:'30px'}}>Issuer Home Page</h1>
    </div>
    <div>
      <div>
        <h4>Issue Vaccination</h4>
      </div> 
      <div>
        <h4>Manage Vaccinations</h4>  
      </div>  
    </div>  
    
    
    <CardGroup style= {{margin:10}}>
    <div>
        <Card style={{ width: '25rem', height:'35rem', padding:'50px', borderRadius:'10px', borderWidth: '3px', margin: 20 }}>
          <Card.Body style={{ paddingTop: '50px', paddingBottom: '100px' }}>
            <div style={{ margin:'10px'}}>
            <Card.Img style={{ padding: '10px' }} variant="top" src="images/syringe.png" />
            </div>
            <div>
            <Button style={{ paddingLeft:'30px', paddingRight:'30px', fontSize:'20px' }} href="/users/issuer/vaccines">Issue Vaccination</Button>            </div>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: '25rem', height:'35rem', padding:'50px', borderRadius:'10px', borderWidth: '3px',margin: 20 }}>
          <Card.Body style={{ paddingTop: '50px', paddingBottom: '100px' }}>
            <div style={{ margin:'10px'}}>
            <Card.Img style={{ padding: '10px' }} variant="top" src="images/employee.png" />
            </div>
            <div>
            <Button style={{ paddingLeft:'30px', paddingRight:'30px', fontSize:'20px' }} href="/users/issuer/manage">Manage Vaccinations</Button>            </div>
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

{/* <div>
<Card style={{ width: '25rem', height:'35rem', padding:'50px', borderRadius:'10px', margin: 20}}>
  <Card.Body style={{ alignContent:'center' }}> 
    <Card.Img style={{ height: '100px' }} variant="top" src="" />
    <Button style={{ paddingLeft:'30px', paddingRight:'30px', fontSize:'20px' }} 
  </Card.Body>      
</Card>
</div> */}

{/* <div>
<Card style={{ width: '25rem', height:'35rem', borderRadius:'10px', margin: 20 }}>
  <Card.Body>
    <div>
      <Figure.Image
        width={180}
        height={180}
        src="https://www.pngrepo.com/png/263757/512/clipboard-list.png"
      />
    </div>
    <div>
    <Button style={{ paddingLeft:'30px', paddingRight:'30px', fontSize:'20px' }} href="/users/issuer/manage">Manage Vaccinations</Button>
    </div>
  </Card.Body>
</Card>
</div> */}

