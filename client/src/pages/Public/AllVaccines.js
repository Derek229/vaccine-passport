import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import {Card, Container, Navbar, Nav, Button, CardGroup} from 'react-bootstrap'
import '../../pages/ComponentStyles/container.css'
import { AuthContext } from '../../providers/AuthProvider'
import InPageNav from '../../components/InPageNav'
import SiteStats from '../../components/SiteStats'



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
			<Card key={vaccine.id} style={{margin: '10px'}}>
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
					<SiteStats pageName="All Vaccines"/>
					<CardGroup style={{paddingBottom: '20px'}}>
						{renderAllVaccines()}
					</CardGroup>
				</Container>
			</div>
		</>
	)
}

export default AllVaccines
