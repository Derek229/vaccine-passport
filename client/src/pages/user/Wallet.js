import axios from 'axios'
import React, { useState, useEffect} from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

//TODO: show user's vaccines provided by issuer

const Wallet = () => {

  const history = useHistory
  
  const [myVaccines, setMyVaccines] = useState([])

  // useEffect(()=> {
  //   getVaccines()
  // }, [])

  // const getVaccines = async () => {
  //   //get user's submissions
  //   //update 1 in url below so it uses userId from context instead
  //   //wait for backend update and change url so that it grabs all vaccines associated with specific user
  //   let res = await axios.get(`/api/users/1/vaccines`)

  //   setMyVaccines(res.data)


  //   //TODO: setSubmissions => res.data.submissions (check what data is in res)
  // }

  // const renderWallet = () => {
  //   return myVaccines.map( vaccine => {
  //     return(
  //       <div key={vaccine.id}>
  //         <Card style={{ width: '100%' }} >
  //           <Card.Body>
  //             <Card.Title><h3>Name: {vaccine.name}</h3></Card.Title>
  //             <Card.Text>
  //               MFG: {vaccine.manufacturer}
  //             </Card.Text>
  //           </Card.Body>
  //           <ListGroup className="list-group-flush">
  //             <ListGroupItem>Verified?: {vaccine.verified}</ListGroupItem>
  //           </ListGroup>
  //         </Card>
  //       </div>
  //     )
  //   })
  // }


  return (
    <>
    <div>
      <h1>user wallet QR Code here</h1>
      {/* {renderWallet()} */}
    </div>
    </>
  )
}

export default Wallet
