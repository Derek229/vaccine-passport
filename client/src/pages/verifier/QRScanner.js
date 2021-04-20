import React, {useContext} from 'react'
import {AuthContext} from '../../providers/AuthProvider'
import QReader from '../../components/QrReader'

const QRScanner = () => {

  const auth = useContext(AuthContext)

  return (
    <div>
      <QReader auth={auth}/>
    </div>
  )
}

export default QRScanner


