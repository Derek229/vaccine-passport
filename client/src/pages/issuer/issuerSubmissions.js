import axios from 'axios'
import React, {useState, useEffect} from 'react'

//TODO: determine what issuer UI should be (check trello board)
//show list of pending submissions from users

const issuerSubmissions = (props) => {
  const {userId} = props

  const getIssuerVaccines = async () => {
    let res = await axios.get(`api/users/${userId}/vaccines`)
  }

  return (
    <div>
      <h1>render vaccine for issuer</h1>
    </div>
  )
}

export default issuerSubmissions
