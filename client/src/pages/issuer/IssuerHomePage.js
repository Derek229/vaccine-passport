import React, {useContext} from 'react'
import { Button, Card, CardGroup, Row, Col} from 'react-bootstrap'
import '../issuer/Styling/IssuerStyle.css'
import "../ComponentStyles/container.css"
import { AuthContext } from '../../providers/AuthProvider';

const IssuerHomePage = () => {

  const auth = useContext(AuthContext)

  return (

    <div className="div">
      <div className="divcontainer">
        <h1>Welcome</h1>
        <h4>{auth.user.name}</h4>
            <div>
              <div className="nav-wrapper1">
                <div className="left-side1">
                    <div className="nav-link-wrapper1">
                      <a className="h4-tag1"  href="/users/issuer/vaccines" style={{textDecoration: "none", color: 'black'}}>Issue Vaccination</a>
                    </div>
                    <div className="nav-link-wrapper1">
                      <a className="h4-tag2" href="/users/issuer/manage" style={{textDecoration: "none", color: 'black'}}>Manage Vaccinations</a> 
                    </div>
                </div>  
              </div>
            </div> 
        <Row style={{flexWrap: 'wrap', width: '100%', height: 'auto', paddingTop: '30px', paddingBottom: '30px', padding: '15px'}}>
          <Col>
          <a href="/users/issuer/vaccines" style={{textDecoration: "none"}}>
            <Card className="card2" style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
              <Card.Img style={{ maxWidth: "100%", margin: '50px 30px 35px 30px'}} variant="middle" src="images/syringe.png"/>
              <Button style={{margin: '15px 20px 25px 20px', padding: '20px 0 20px 0', fontSize: '17px'}}  href="/users/issuer/vaccines">Issue Vaccination</Button>
            </Card>
          </a>
          </Col>
          <Col>
            <a href="/users/issuer/manage" style={{textDecoration: "none"}}>
            <Card className="card2" style={{borderRadius: "10px", paddingTop: "25px", paddingBottom: "25px",padding: "15px"}}>
              <Card.Img style={{ maxWidth: "100%", margin: '50px 30px 35px 30px'}} variant="middle" src="images/employee.png"/>
              <Button style={{margin: '15px 20px 25px 20px', padding: '20px 0 20px 0', fontSize: '17px'}} href="/users/issuer/manage">Manage Vaccinations</Button>
            </Card>
            </a>
          </Col>
        </Row>
      </div>
    </div>


  )
}


export default IssuerHomePage





{/* <>
<Card style={{width:"75rem", height:"75rem", margin:"0 auto 0 auto", marginTop:"100px"}} >
  <div>
    <h1 style={{textAlign: 'center', marginTop: '100px'}}>Issuer Home Page</h1>
  </div>
    <div>
      <div className="nav-wrapper1">
        <div className="left-side1">
            <div className="nav-link-wrapper1">
              <h4 className="h4-tag1">Issue Vaccination</h4>
            </div>
            <div className="nav-link-wrapper1">
              <h4 className="h4-tag2">Manage Vaccinations</h4> 
            </div>
        </div>  
      </div>
    </div>  
  
  
  <CardGroup className="card-group1">
    <div style={{marginRight:"10px"}}>
      <Card className="card-selection1">
        <Card.Body className="card-body1">
          <div style={{ margin:'10px'}}>
          <Card.Img className="card-img1" variant="top" src="images/syringe.png" />
          </div>
          <div className="button-position1">
          <Button className="card-button1" href="/users/issuer/vaccines">Issue Vaccination</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
    <div style={{marginLeft:"10px"}}>
      <Card className="card-selection1">
        <Card.Body className="card-body1">
          <div style={{ margin:'10px'}}>
          <Card.Img className="card-img1" variant="top" src="images/employee.png" />
          </div>
          <div className="button-position1">
          <Button className="card-button1" href="/users/issuer/manage">Manage Vaccinations</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  </CardGroup>
</Card>
</> */}


