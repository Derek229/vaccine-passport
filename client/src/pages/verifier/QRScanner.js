import React, {useContext, useState} from 'react'
import {AuthContext} from '../../providers/AuthProvider'
import QReader from '../../components/QrReader'
import {Button, Container} from 'react-bootstrap'

const QRScanner = () => {

  const [showScanner, setShowScanner] = useState(false)

  const auth = useContext(AuthContext)

  const show = () => {
    setShowScanner(!showScanner)
  }

  return (
    <Container>
      <div >
        {showScanner === false && <h1 style={{marginTop: '20px'}}>Scan a User's QR Code Here</h1>}
        {showScanner === false && <h4 style={{marginTop: '20px'}}>click the button below to get started</h4>}
        <Button style={{margin: '20px'}} onClick={show}>{showScanner === false ? 'Open QR Scanner' : 'Close QR Scanner'}</Button>
        {showScanner === true && <QReader auth={auth}/>}
      </div>
    </Container>
  )
}

export default QRScanner


