import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import axios from 'axios'

const  ReqVaccineCard=(props)=> {


const {reqVaccine, reqVaccines, setReqVaccines, user_id}=props

  const deleteReqVaccine = async () => {
    await axios.delete(`/api/users/${user_id}/required_vaccines/${reqVaccine.required_vaccines_id}`)
    const filteredReqVaccines = reqVaccines.filter(x=>x.required_vaccines_id !== reqVaccine.required_vaccines_id)
    setReqVaccines(filteredReqVaccines)
  }


return(
  <>
    <tr>
      <td><p style={{marginLeft:'100px',marginTop:'20px'}}>{reqVaccine.vaccine_name}</p></td>
      <td>
        <Button style={{marginTop:'10px', marginLeft:'0px'}}className=" btn btn-danger" onClick={()=>deleteReqVaccine()}>Delete</Button>
      </td>
    </tr>
  </>
    )
}
export default ReqVaccineCard


{/* <Card border='primary' style={{width:'50%', heigth:'10%'}}>
<Card.Body>{reqVaccine.user_name}</Card.Body>
<Button style={{margin:'10px',width:'30',}} onClick={deleteReqVaccine}>delete required vaccine</Button>
<Card.Body>{reqVaccine.vaccine_name}</Card.Body>
</Card> */}
