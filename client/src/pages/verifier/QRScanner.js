import React, {useContext, useState} from 'react'
import {AuthContext} from '../../providers/AuthProvider'
import QReader from '../../components/QrReader'
import {Button, Card, Container} from 'react-bootstrap'

const QRScanner = () => {

  const [showScanner, setShowScanner] = useState(false)

  const auth = useContext(AuthContext)

  const show = () => {
    setShowScanner(!showScanner)
  }

  return (
    <div style={{margin:'0 auto',  width: '80%' }}>
      <Card style={{display:'flex', flexDirection:'column', alignItem:'center', justifyContent:'center', paddingTop:'15px', marginTop: '25px' }}>
      {showScanner === false && <h1 style={{marginTop: '20px'}}>Scan a User's QR Code Here</h1>}
      {showScanner === false && <h4 style={{marginTop: '20px'}}>click the button below to get started</h4>}
      <Button style={{margin: '20px'}} onClick={show}>{showScanner === false ? 'Open QR Scanner' : 'Close QR Scanner'}</Button>
      {showScanner === true && <QReader style={{display:'flex', flexDirection:'column', alignItem:'center', justifyContent:'center' }} auth={auth}/>}
      </Card>
    </div>
  )
}

export default QRScanner


