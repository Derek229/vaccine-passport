// import axios from 'axios'
import React, { useContext } from 'react'
import UserPageNavNoCenter from '../../components/UserPageNavNoCenter'
import { AuthContext } from '../../providers/AuthProvider'
import {Container} from 'react-bootstrap'
// import {useHistory} from 'react-router-dom'

//TODO: show user's vaccines provided by issuer

const Wallet = () => {

  const auth = useContext(AuthContext)

  return (
    <>
    <UserPageNavNoCenter auth={auth}/>
    <Container>
      <div>
        <h1>user wallet QR Code here</h1>
        {/* {renderWallet()} */}
      </div>
    </Container>
    </>
  )
}

export default Wallet
