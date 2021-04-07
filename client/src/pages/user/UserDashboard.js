import axios from 'axios'
import React, { useState, useEffect} from 'react'
import Card from '../../components/Card'
import {Link, useHistory} from 'react-router-dom'

//TODO: render user info, link to wallet, CRUD action options for user

const UserDashboard = (props) => {
  const {userId} = props

  const history = useHistory
  
  const [user, setUser] = useState([])
  
  
  const getUserData = async () => {
    //get user info
    let res = await axios.get(`/api/users/${userId}`)

    //setUser(res.data) --check to make sure this is right w/ console.log() once backend is setup
  }

  const renderUser = () => {
    //generate user profile information (maybe use a card?)
    return(
      <>
      <div>
        <Card>
        <h1>user name here</h1>
        <h2>user info below:</h2>
        </Card>
      </div>
      </>
    )
  }

  return (
    <>
    <div>
      <h1>user dash here</h1>
      {renderUser()}
    </div>
    </>
  )
}

export default UserDashboard
