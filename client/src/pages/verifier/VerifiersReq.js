import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { useParams } from 'react-router'
import {AuthContext} from '../../providers/AuthProvider'

//TODO: render required vaccines for verifier user based of id
//TODO: able to add vaccines to required list and check users vaccinations

const VerifierReq = () => {

  
  const auth = useContext(AuthContext)

  const [RequiredVaccines, setRequiredVaccines] = useState([])
  
  useEffect(()=> {
  getRequiredVaccines()
},[])

  const getRequiredVaccines = async () => {
      let res = await axios.get(`/api/users/${auth.user.id}/required_vaccines`) 
      setRequiredVaccines(res.data)
      console.log('required_vaccines', res.data)
  }

  // const getUser = async () => {
  //   let res = await axios.get()
  // }

  const renderRequiredVaccines = () => {
    return requiredVaccines.map( requiredVaccine =>{
  return(
    <Card>
      <Card.Header> {vaccine.name} </Card.Header>
    </Card>
    )
  })
  }

  return (
    <div>
    {getRequiredVaccines}
    </div>
  )
}

export default VerifierReq
