import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'

const VaccinesCRUD = () => {

  const [vaccines, setVaccines] = useState([])

  useEffect(()=>{
    getVaccines()
  },[])

  const getVaccines = async () => {
    //update :id of 1 in url to be variable for user accessing page
    let res = await axios.get(`/api/users/1/vaccines`) 
    setVaccines(res.data)
  }

  const renderVaccines = () => {
    //generate list of vaccines
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
      <h1>page for issuer to see all vaccines, add, edit, and delete listings</h1>
      {renderVaccines()}
    </div>
    </>
  )
}

export default VaccinesCRUD
