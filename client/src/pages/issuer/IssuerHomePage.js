import React from 'react'
import { Button, Card, CardGroup} from 'react-bootstrap'
import '../issuer/Styling/IssuerStyle.css'

const IssuerHomePage = () => {
  return (
  <>
  <Card style={{width:"75rem", height:"75rem", margin:"0 auto 0 auto", marginTop:"100px"}} >
    <div>
      <h1 style={{textAlign: 'center', marginTop: '100px'}}>Issuer Home Page</h1>
    </div>
      <div class="container">
        <div class="nav-wrapper">
          <div class="left-side">
              <div class="nav-link-wrapper">
                <h4>Issue Vaccination</h4>
              </div>
              <div class="nav-link-wrapper">
                <h4>Manage Vaccinations</h4> 
              </div>
          </div>  
        </div>
      </div>  
    
    
    <CardGroup className="card-group">
      <div style={{marginRight:"10px"}}>
        <Card className="card-selection">
          <Card.Body className="card-body">
            <div style={{ margin:'10px'}}>
            <Card.Img className="card-img" variant="top" src="images/syringe.png" />
            </div>
            <div className="button-position">
            <Button className="card-button" href="/users/issuer/vaccines">Issue Vaccination</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div style={{marginLeft:"10px"}}>
        <Card className="card-selection">
          <Card.Body className="card-body">
            <div style={{ margin:'10px'}}>
            <Card.Img className="card-img" variant="top" src="images/employee.png" />
            </div>
            <div className="button-position">
            <Button className="card-button" href="/users/issuer/manage">Manage Vaccinations</Button>
            </div>
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






