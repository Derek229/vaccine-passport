import React, { useContext, useState } from 'react'
import {useEffect} from 'react'
import { Container, Button, Form, Table } from 'react-bootstrap';
import axios from 'axios'
import { AuthContext } from '../../providers/AuthProvider';
import { Typeahead } from 'react-bootstrap-typeahead'
import ReqVaccineCard from './ReqVaccineCard';
import InPageNavNoCenter from '../../components/UserPageNavNoCenter'
// show, create, delete
const RequiredVaccine=()=> {

 
  const[reqVaccines, setReqVaccines] =useState([]);
  const [vaccineSelection, setVaccineSelection] = useState(null)
  const [vaccineOptions, setVaccineOptions] = useState([])
  const[showForm, setShowForm]=useState(false)
 

  const auth = useContext(AuthContext)
  
  useEffect(()=> {
    getReqVaccine()
    getVaccines()
  },[])



  const getReqVaccine = async () => {
    let res = await axios.get(`/api/users/${auth.user.id}/required_vaccines/`)
    setReqVaccines(res.data)
  }
  
  const renderReqVaccine = () =>{
      return reqVaccines.map(reqVaccine =><ReqVaccineCard reqVaccine={reqVaccine} reqVaccines={reqVaccines} setReqVaccines={setReqVaccines} user_id={auth.user.id} /> 

      
      )
  }

 const getVaccines= async () => {
   let res2 = await axios.get(`/api/users/${auth.user.id}/vaccines`)
   setVaccineOptions(res2.data)
 }

  const createReqVaccine = async () => {
    try{
      await axios.post(`/api/users/${auth.user.id}/required_vaccines`,{user_id: auth.user.id, vaccine_id: vaccineSelection[0].id})
      getReqVaccine()
    }catch(err){
      alert("invalid submission. Ensure all fields are filled out")
    }
  }

    const handleSubmit = (e)=>{
      e.preventDefault()  
      createReqVaccine()
    }

    const requiredVaccineForm = () =>{
      return(
        <>
        <Form onSubmit= {handleSubmit} style={{marginBottom:'15px', backgroundColor:'white'}}>
        <Form.Group>
          <Form.Label><h3 style={{marginLeft:'10px', marginTop:"10px"}}>Add a Vaccine to Required List</h3></Form.Label>
          <Typeahead style={{marginLeft:'10px', marginRight:'15px'}}
            id="vaccine"
            labelKey="name"
            onChange={setVaccineSelection}
            placeholder="Select a Vaccine"
            selected={vaccineSelection}
            options={vaccineOptions}
          />
        </Form.Group>
        <Button style={{marginLeft:'10px', marginBottom:'10px', width:'80px'}}type='submit'> add </Button>
        </Form>
        </>
        )
      }
    
      const reqTable = () => {
        return(
        <Table style={{padding: '0px 0px 0px 50px ', margin: '0', backgroundColor: 'white'}} responsive striped hover>
          <thead>
            <tr>
              <th><p style={{marginLeft:'100px',marginTop:'20px'}}>Vaccine Name</p></th>
              <th><p style={{marginBottom:'15px'}}>Action</p></th>
            </tr>
          </thead>
          <tbody>
            {renderReqVaccine()}
          </tbody>
        </Table>
        )
      }


  return (
    <div>
      <InPageNavNoCenter auth={auth}/>
      <Container border='primary'>
      <div className="tablecontainer" style={{backgroundColor: 'white', marginBottom: '15px', marginTop: '15px', padding: '10px'}}>
        <h1>Required Vaccines List</h1>
        <Button onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide Form' : 'Add New Required Vaccine'}</Button>
        </div>
        {showForm && requiredVaccineForm()}
        {reqTable()}
        </Container>  
    </div>

  )
}

export default RequiredVaccine

 
