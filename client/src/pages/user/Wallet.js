// import axios from 'axios'
import React, { useContext } from 'react'
import UserPageNavNoCenter from '../../components/UserPageNavNoCenter'
import { AuthContext } from '../../providers/AuthProvider'
import {Card, Container} from 'react-bootstrap'
import QRCode from 'qrcode.react'
import useWindowDimensions from '../../components/useWindowDimensions'
// import {useHistory} from 'react-router-dom'

//TODO: show user's vaccines provided by issuer

const Wallet = () => {

  const auth = useContext(AuthContext)
  const {width} = useWindowDimensions()
  const hide = (width <=760)

  return (
    <>
    <UserPageNavNoCenter auth={auth}/>
    <Container>
      <div>
				{hide === false && <Card className="header">
       	 <h1>Your Personal QR Code</h1>
				</Card>}
				<Card className="header">
       	 <QRCode value={auth.user.id.toString()} size={350} includeMargin={true} imageSettings="center"/>
				</Card>
      </div>
    </Container>
    </>
  )
}

export default Wallet
