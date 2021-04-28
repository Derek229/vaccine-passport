import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import {Button, Form } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import {AuthContext} from '../../providers/AuthProvider'

//TODO: show array of the requierd vaccines for after hitting submit
//TODO: able to add vaccines to required list and check users vaccinations

const VerifierReq = () => {

  
  const auth = useContext(AuthContext)

  const [requiredVaccines, setRequiredVaccines] = useState(null)
  const [users, setUsers] = useState ([])
  const [userSelection, setUserSelection] = useState(null);
  
  useEffect(()=> {
    getUsers()
  },[])

  const getUsers = async () => {
    try{
    let res1 = await axios.get(`/api/users/`)
    setUsers(res1.data)
    }catch(err){
      console.log(err)
    }
  }

  //call this in onSubmit able to get array in console //TODO need to render on page
  const getRequiredVaccines = async (e) => {
    e.preventDefault()
     try { let res = await axios.get(`/api/verify_vaccine/${userSelection[0].user_id}/${auth.user.id}`)
      setRequiredVaccines(res.data)
   } catch (err){  
      console.log(err)
   }
  }
    
  
  const normalizeUserData = (arrayIn) => {
    //normalize user data to display in typeahead
    const tempArray = []
    arrayIn.forEach(obj => {
      let name = `${obj.first_name} ${obj.last_name}, ID: ${obj.id}`
      let user_id = obj.id
      let labelKey = 'user_id'

      //excludes issuers and admin from list of selectable people
      if(obj.role === "user"){
        tempArray.push({name: name, user_id: user_id, labelKey: labelKey})
      }

    })
    return tempArray
  }

  const chooseUserForm = () => {
    let userOptions = normalizeUserData(users)
    return(
      <>
    <Form onSubmit={getRequiredVaccines}>
    <Form.Group>
      <Form.Label>Select a User</Form.Label>
      <Typeahead
        id="users"
        labelKey="name"
        onChange={setUserSelection}
        placeholder="Select a User"
        // onChange={
        //   handleUserChange(userSelection)
        // }
        selected={userSelection}
        options={userOptions}
      />
    </Form.Group>
    <Button type='submit'> verify </Button>
    </Form>
    </>
    )
  }

 const renderRequiredVaccines = (objIn) => {
     return(
     <>
     <div>
    <h1>hasAllVaccines: {objIn.hasAllVaccines.toString()}</h1>
    </div>
   </>
   )


 }


   

  return (
    <div>
    {chooseUserForm()}
    {requiredVaccines && renderRequiredVaccines(requiredVaccines)}
    {!requiredVaccines && <p>choose a user</p>}
    
    </div>
  )
}

export default VerifierReq
