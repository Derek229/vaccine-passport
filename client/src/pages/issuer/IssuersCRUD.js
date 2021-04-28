import React, {useContext, useEffect, useState} from 'react'
import {Button, Container, Table} from 'react-bootstrap'
import {AuthContext} from '../../providers/AuthProvider'
import axios from 'axios'
import IssuerVaccination from './IssuerVaccination'
import {useHistory} from 'react-router-dom'
import UserPageNavNoCenter from '../../components/UserPageNavNoCenter'
import '../ComponentStyles/container.css'


const IssuersCRUD = () => {

  const auth = useContext(AuthContext)
  const history = useHistory()

  const [vaccinations, setVaccinations] = useState([])

  useEffect(()=> {
    getIssuedVaccinations()
  }, [])

  const getIssuedVaccinations = async () => {
    try{
      let res = await axios.get(`/api/issuers/manage/${auth.user.id}`)
      setVaccinations(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const renderVaccinations = () => {
    return vaccinations.map(vaccination => {

      return(
        <IssuerVaccination key={vaccination.id} vaccination={vaccination} vaccinations={vaccinations} setVaccinations={setVaccinations} auth={auth}/>
      )
    })
  }

  const vaccinationsTable = () => {
    return(
    <Table style={{padding: '0px', margin: '0', backgroundColor: 'white'}} responsive striped hover>
      <thead>
        <tr>
          <th>Vaccine Name</th>
          <th>Manufacturer</th>
          <th>Issued To</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {renderVaccinations()}
      </tbody>
    </Table>
    )
  }

  return (
    <div>
      <UserPageNavNoCenter auth={auth}/>
      
      <Container>
      <div className="header">
        <div className="leftalign">
          <h3 style={{margin: '10px'}}>Previously Issued Vaccinations </h3>
          <h3 style={{color: 'lightgrey', marginTop: '10px', marginBottom: '0px'}}>|</h3>
          <p style={{marginTop: '16px', paddingLeft: '7px'}}>  {vaccinations.length} Vaccinations</p>
        </div>
        <Button onClick={()=>history.push('/users/issuer/vaccines')}>Add New Vaccination</Button>
      </div>
      {vaccinationsTable()}
      </Container>
    </div>
    
  )
}

export default IssuersCRUD
