import React, { useContext, useState } from 'react'
import {useEffect} from 'react'
import { Card } from 'react-bootstrap';
import axios from 'axios'
import { AuthContext } from '../../providers/AuthProvider';
// show, create, delete
const RequiredVaccine=()=> {

 
  const[reqVaccines, setReqVaccines] =useState([]);
  const auth = useContext(AuthContext)
  useEffect(()=> {
    getReqVaccine()
  },[])



  const getReqVaccine = async () => {
    let res = await axios.get(`/api/users/${auth.user.id}/required_vaccines/`)
    setReqVaccines(res.data)
    console.log('get required vaccines', res.data)
  }
  
  const renderReqVaccine = () =>{
      return reqVaccines.map(reqVaccine =>{
        return (
        <Card>

        <Card.Body></Card.Body>
      </Card>
        )}
        )
  }

  // const createReqVaccine = async () => {
  //   let res1 = await axios.post(`/api/users/${user_id}/required_vaccines`)
  //   console.log(res1.data)
  //   history.push(``)
  // }


  return (
    <div>
      <h1>Required Vaccines List</h1>
      {renderReqVaccine()}
    </div>
  )
}

export default RequiredVaccine

