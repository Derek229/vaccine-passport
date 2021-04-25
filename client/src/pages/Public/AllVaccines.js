import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import {Card, Container, Navbar, Nav, Button} from 'react-bootstrap'
import '../../pages/ComponentStyles/container.css'
import { AuthContext } from '../../providers/AuthProvider'
import InPageNav from '../../components/InPageNav'



const AllVaccines = () => {

	const [allVaccines, setAllVaccines] = useState([])

	const auth = useContext(AuthContext)

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
		<>
			<InPageNav auth={auth}/>
			<div>
				
				<Container>
					<h1>page for any user to see all vaccines.</h1>
					{renderAllVaccines()}
				</Container>
			</div>
		</>
	)
}

export default AllVaccines
