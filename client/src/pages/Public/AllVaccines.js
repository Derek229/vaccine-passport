import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Card, Container} from 'react-bootstrap'



const AllVaccines = () => {

	const [allVaccines, setAllVaccines] = useState([])

	useEffect(()=>{
    getAllVaccines()
  },[])

  const getAllVaccines = async () => {
    let res = await axios.get(`/api/users/1/vaccines`) 
    setAllVaccines(res.data)
	
  }

	const renderAllVaccines = () => {  
    //map through array and pass each vaccine to vaccine.js to render card
    return allVaccines.map( vaccine => {
			
			return(
			<Card>
			  <Card.Body>
          <Card.Title><h4>Vaccine Name: {vaccine.name}</h4></Card.Title>
          <Card.Text>
          	Manufacturer {vaccine.manufacturer}
          </Card.Text>
        </Card.Body>
			</Card>
		)})
  }

	return (
		<div>
			<Container>
      	<h1>page for any user to see all vaccines.</h1>
    	</Container>
        	{renderAllVaccines()}
		</div>
	)
}

export default AllVaccines
