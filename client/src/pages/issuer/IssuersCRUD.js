import React, {useContext, useEffect, useState} from 'react'
import {Button, Container} from 'react-bootstrap'
import {AuthContext} from '../../providers/AuthProvider'
import axios from 'axios'
import IssuerVaccinationCard from './IssuerVaccinationCard'
import {useHistory} from 'react-router-dom'
import UserPageNavNoCenter from '../../components/UserPageNavNoCenter'
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
      <UserPageNavNoCenter auth={auth}/>
      
      <Container>
      <div className="tablecontainer" style={{backgroundColor: 'white', marginBottom: '15px', marginTop: '15px', padding: '10px'}}>
      <h1>Manage Previously Issued Vaccines</h1>
      <Button style={{marginBottom: 20}} onClick={()=>history.push('/users/issuer/vaccines')}>Issue New Vaccination</Button>
      </div>
      {renderVaccinations()}
      </Container>
    </div>
    
  )
}

export default IssuersCRUD
