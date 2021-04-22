import React from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'


const AdminVaccination = (props) => {

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

  return(
    <>
      <tr>
        <td>{vaccination.id}</td>
        <td>{vaccination.vaccine_name}</td>
        <td>{vaccination.manufacturer}</td>
        <td>{vaccination.first_name} {vaccination.last_name}</td>
        <td>{vaccination.issuer_name}</td>
        <td>
          <Button className="ml-1 btn btn-danger" onClick={()=>deleteVaccination()}>Delete</Button>
        </td>
      </tr>
    </>
      )
}

export default AdminVaccination
