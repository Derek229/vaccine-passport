import React from 'react'
import { Button, Card } from 'react-bootstrap'
import axios from 'axios'

const  ReqVaccineCard=(props)=> {


const {reqVaccine, user_id}=props

  const deleteReqVaccine = async () => {
    console.log('button clicked')
    debugger
  let res = await axios.delete(`/api/users/${user_id}/required_vaccines/${reqVaccine.required_vaccines_id}`)
    // const filteredReqVaccines = RequiredVaccine.filter(x=>x.id !== RequiredVaccine.id)
    // setReqVaccines(filteredReqVaccines)
  }


  return (
    <div>
  <Card>
    <Card.Body>{reqVaccine.user_name}</Card.Body>
    <Card.Body>{reqVaccine.vaccine_name}</Card.Body>
    <Button onClick={deleteReqVaccine}>delete required vaccine</Button>
  </Card>
    </div>
  )
}

export default ReqVaccineCard
