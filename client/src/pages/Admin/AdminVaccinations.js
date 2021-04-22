import React, {useContext, useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import {AuthContext} from '../../providers/AuthProvider'
import axios from 'axios'
import IssuerVaccinationCard from '../../pages/issuer/IssuerVaccinationCard'
import {useHistory} from 'react-router-dom'

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
        <IssuerVaccinationCard key={vaccination.id} vaccination={vaccination} vaccinations={vaccinations} setVaccinations={setVaccinations} auth={auth}/>
      )
    })
  }

  return (
    <div>
      <h1>Manage Previously Issued Vaccines</h1>
      <Button style={{marginBottom: 20}} onClick={()=>history.push('/users/issuer/vaccines')}>Add New Vaccine</Button>
      {renderVaccinations()}
      
    </div>
  )
}

export default AdminVaccinations
