import axios from 'axios'
import React, { useState } from 'react'

const VaccinesCRUD = () => {

  const [vaccines, setVaccines] = useState([])

  const getVaccines = async () => {
    let res = await axios.get(`api/vaccines`) 
    //check to make sure this route is setup, or adjust according to current routes
    setVaccines(res.data)
    console.log(res.data)
  }
  return (
    <div>
      <h1>page for issuer to see all vaccines, add, edit, and delete listings</h1>
    </div>
  )
}

export default VaccinesCRUD
