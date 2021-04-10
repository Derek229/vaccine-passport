import axios from 'axios'
import React, { useState, useEffect, useContext} from 'react'
import Card from '../../components/Card'
import {Link, useHistory} from 'react-router-dom'
import {AuthContext} from '../../providers/AuthProvider'

//TODO: render user info, link to wallet, CRUD action options for user

const UserDashboard = (props) => {
  
  const auth = useContext(AuthContext)

  const history = useHistory
  
  const [user, setUser] = useState([])
  const [vaccines, setVaccines] = useState([])

  useEffect(()=>{
    getVaccines()
    getUserData()
  },[])
  
  
  const getUserData = async () => {
    //get user info
    let res = await axios.get(`/api/users/${auth.user.id}`)
    setUser(res.data)

    //setUser(res.data) --check to make sure this is right w/ console.log() once backend is setup
  }

  const getVaccines = async () => {
    //TODO: change 1 in URL below to string interpolate userID once users controller is setup
    let res = await axios.get(`/api/users/1/vaccines`)
    setVaccines(res.data)

  }

  const renderUser = () => {
    //generate user profile information (maybe use a card?)
    return(
      <>
      <div>
        <Card>
        <h1>Name: {user.first_name} {user.last_name}</h1>
        <h2>user's info below: {user.email}</h2>
        </Card>
      </div>
      </>
    )
  }

  const renderVaccines = () => {
    //generate list of vaccine choices
    return vaccines.map( vaccine => {
      return(
        <>
        <div>
          <Card>
          <h1>Vaccine Name: {vaccine.name}</h1>
          <h2>Manufacturer: {vaccine.manufacturer}</h2>
          {/* <h3>verified status: {vaccine.verified}</h3> */}
          </Card>
        </div>
        </>
      )
    })
  }

  return (
    <>
    <div>
      <h1>user dash here</h1>
      {renderUser()}
      <h2>Available Vaccines: </h2>
      {renderVaccines()}
    </div>
    </>
  )
}

export default UserDashboard
