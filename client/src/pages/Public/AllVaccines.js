import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import {Card, Container, CardColumns} from 'react-bootstrap'
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
			<Card key={vaccine.id} style={{margin: '10px', width: '295px', height: '200px'}}>
			  <Card.Body>
          <Card.Title><h4 style={{color: 'rgb(70,70,70)'}}>Vaccine Name:</h4><h4>{vaccine.name}</h4></Card.Title>
          <Card.Text>
          	<p style={{color: 'rgb(70,70,70)'}}>Manufacturer: </p><p style={{margin: '-10px 0 0 0'}}>{vaccine.manufacturer}</p>
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
					<CardColumns style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' ,paddingBottom: '20px', margin: '0 auto 0 auto'}}>
						{renderAllVaccines()}
					</CardColumns>
				</Container>
			</div>
		</>
	)
}

export default AllVaccines
