import React, {useContext, useState} from 'react'
import {AuthContext} from '../../providers/AuthProvider'
import QReader from '../../components/QrReader'
import {Button} from 'react-bootstrap'

const QRScanner = () => {

  const [showScanner, setShowScanner] = useState(false)

  const auth = useContext(AuthContext)

  const show = () => {
    setShowScanner(!showScanner)
  }

  return (
    <div>
      <Button style={{margin: '20px'}} onClick={show}>{showScanner === false ? 'Open QR Scanner' : 'Close QR Scanner'}</Button>
      {showScanner === true && <QReader auth={auth}/>}
    </div>
  )
}

export default QRScanner


