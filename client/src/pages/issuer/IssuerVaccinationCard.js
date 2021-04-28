import React from 'react'
import {Card, Button} from 'react-bootstrap'
import axios from 'axios'

const IssuerVaccinationCard = (props) => {
  const {vaccination, setVaccinations, vaccinations, auth} = props

  const deleteVaccination = async () => {
    try{
      let res = await axios.delete(`/api/users/${auth.user.id}/vaccinations/${vaccination.id}`)
      const filteredVaccinations = vaccinations.filter(x=>x.id !== vaccination.id)
      setVaccinations(filteredVaccinations)
      console.log(res.data)
    }catch(err){
      alert(err)
      console.log(err)
    }
  }

  return (
    <Card border='primary' style={{paddingBottom:'25', paddingTop:'25', marginTop:'10px', marginBottom:'10px', borderRadius:'20px'}}>
      <Card.Body>
        <Card.Img/>
        <Card.Title><h3>Vaccination: {vaccination.vaccine_name}</h3></Card.Title>
        <Card.Text>
          MFG: {vaccination.manufacturer}
        </Card.Text>
        <Card.Text>
          vaccine id: {vaccination.vaccine_id}
        </Card.Text>
        <Card.Text>
          Issuer: {vaccination.issuer_name}
        </Card.Text>
        <Card.Text>
          Issued to: {vaccination.first_name} {vaccination.last_name}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="secondary" onClick={deleteVaccination}>
          Delete
        </Button>  
      </Card.Body>
    </Card>
  )
}

export default IssuerVaccinationCard
