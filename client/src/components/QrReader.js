import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import axios from 'axios'

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
      console.log(res.data)
      this.setState({
        result: data,
        verifierVaccines: res.data.verifier_vaccines,
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


  render() {
    return (
      <div>
        {this.state.hasAllVaccines !== null ? <h1>User has all required vaccines: {this.state.hasAllVaccines.toString()}</h1> : <h3>waiting for scan results</h3>}
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '50%' , height: '50%'}}
        />
        <p>qr value: {this.state.result}</p>
        
      </div>
    )
  }
}
export default QReader
