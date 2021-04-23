import React, {useContext, useEffect, useState} from 'react'
import {Button, Table, Container} from 'react-bootstrap'
import {AuthContext} from '../../providers/AuthProvider'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import AdminVaccination from './AdminVaccination'
import '../ComponentStyles/container.css'

const AdminVaccinations = () => {

  const auth = useContext(AuthContext)
  const history = useHistory()

  const [vaccinations, setVaccinations] = useState([])

  useEffect(()=> {
    getIssuedVaccinations()
  }, [])

  const getIssuedVaccinations = async () => {
    try{
      let res = await axios.get(`/api/users/${auth.user.id}/vaccinations`)
      setVaccinations(res.data)
      console.log(res.data)
    }catch(err){
      alert(err)
      console.log(err)
    }
  }

  const renderVaccinations = () => {
    return vaccinations.map(vaccination => {

      return(
        <AdminVaccination key={vaccination.id} vaccination={vaccination} vaccinations={vaccinations} setVaccinations={setVaccinations} auth={auth}/>
      )
    })
  }

  const vaccinationsTable = () => {
    return(
    <Table style={{padding: '0px', margin: '0', backgroundColor: 'white'}} responsive striped hover>
      <thead>
        <tr>
          <th width="13%">Vaccination ID</th>
          <th>Vaccine Name</th>
          <th>Manufacturer</th>
          <th>Issued To</th>
          <th>Issued By</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderVaccinations()}
      </tbody>
    </Table>
    )
  }

  return (
    <>
    <Container >
      <div className="header">
        <div className="leftalign">
        <h3>Manage Vaccinations |</h3>
          <p style={{paddingTop: '12px', paddingLeft: '7px'}}>  {vaccinations.length} Vaccinations</p>
        </div>
        <Button onClick={()=>history.push('/users/issuer/vaccines')}>Add New Vaccination</Button>
      </div>
      <div style={{boxShadow: '0px 1px 10px 1px lightgrey'}}>
        {vaccinationsTable()}
      </div>
    </Container>
    </>
    
  )
}

export default AdminVaccinations
