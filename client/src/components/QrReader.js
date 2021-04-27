import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import axios from 'axios'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'

class QReader extends Component {
  state = {
    result: 'No result',
    verifierVaccines: [],
    userVaccines: [],
    hasAllVaccines: null
  }

  handleScan = data => {
    if (data) {
    
      this.getRequiredState(data)
    }
  }

  getRequiredState = async data => {
      try { 
      let res = await axios.get(`/api/verify_vaccine/${data}/${this.props.auth.user.id}`)
      this.setState({
        result: data,
        verifierVaccines: res.data.verifiers_vaccines,
        userVaccines: res.data.user_vaccines,
        hasAllVaccines: res.data.hasAllVaccines
      })
   } catch (err){  
      console.log(err)
   }
  }

  handleError = err => {
    console.error(err)
  }

  renderListOfVaccines = list => {
    return list.map(item => {
      return(
      <ListGroup key={item.vaccine_name}>
        <ListGroupItem>{item.vaccine_name}</ListGroupItem>
      </ListGroup>
      )
    }

    )
  }

  compareVaccines = (userArr, verifArr) => {
    let result = 'true'
    verifArr.forEach(verifVacc => {
      let found = userArr.find(userVacc => userVacc.vaccine_name === verifVacc.vaccine_name)
      console.log('found', found)
      if (!found){
        result = "false"
      }
    })
    console.log('loop finished, result: ', result)
    return result
  }


  render() {
    return (
      <Container>
        <Row>
        <Col style={{display:'flex', flexDirection:'column', alignItem:'center', justifyContent:'center' }}>
        {this.state.hasAllVaccines !== null ? <h3>User has all required vaccines: {this.compareVaccines(this.state.userVaccines, this.state.verifierVaccines)}</h3> : <h3>waiting for scan results</h3>}
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' , height: '100%', display:'flex', flexDirection:'column', alignItem:'center', justifyContent:'center' }}
        />
        <p>user id: {this.state.result}</p>

        </Col>
        <Col style={{display:'flex', flexDirection:'column', alignItem:'center', justifyContent:'center' }}>
          {this.state.hasAllVaccines !== null && <h3>User's Vaccines: </h3>}
          {this.state.hasAllVaccines !== null && this.renderListOfVaccines(this.state.userVaccines)}
          {this.state.hasAllVaccines !== null && <h3>Verifier's Vaccines: </h3>}
          {this.state.hasAllVaccines !== null && this.renderListOfVaccines(this.state.verifierVaccines)}
        </Col>
        </Row>
        
      </Container>
    )
  }
}
export default QReader
