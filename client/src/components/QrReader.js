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
      this.setState({
        result: data,
        verifierVaccines: res.data.verifier_vaccines,
        userVaccines: res.data.user_vaccines,
        hasAllVaccines: res.data.has_all_vaccines
      })
   } catch (err){  
      console.log(err)
   }
  }

  handleError = err => {
    console.error(err)
  }

  renderRequiredVaccines = () => {
    console.log('renderRequiredVaccines called')
    return(
      <>
        <div>
          <h1>hasAllVaccines: {this.state.hasAllVaccines.toString()}</h1>
        </div>
      </>
    )


 }

  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
        {this.state?.hasAllVaccines && this.renderRequiredVaccines()}
      </div>
    )
  }
}
export default QReader
