import React, {useState, useEffect} from 'react'
import {Button, Card, Modal} from 'react-bootstrap'
import axios from 'axios'
import greencheck from '../../Vaccine Passport Icons/greencheck.png'
import redx from '../../Vaccine Passport Icons/redx.png'

const VerifierCard = (props) => {

  const {verifier, auth, userVaccinations} = props

  const [vaccinations, setVaccinations] = useState(null)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  useEffect(() => {
    getVerifierVaccinations(verifier)
  },[])

  const getVerifierVaccinations = async (verifier) => {
    try{
      let res = await axios.get(`/api/required_vaccines/${verifier.id}`)
      setVaccinations(res.data)
    }catch(err){
      alert(`error retrieving required vaccines for ${verifier.name}`)
      console.log(err)
    }
  }

  const compareVaccines = (userArr, verifArr) => {
    let result = 'true'
    verifArr.forEach(verifVacc => {
      let found = userArr.find(userVacc => userVacc.vaccine_name === verifVacc.vaccine_name)
      if (!found){
        result = "false"
      }
    })
    if(result === "true"){
      return <img src={greencheck} alt="green check" style={{height: '20px', width: '20px'}} />
    }else{
      return <img src={redx} alt="red x" style={{height: '20px', width: '20px'}} />
    }
      
  }



  const requiredVaccModal = () => {
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          View Required
        </Button>
  
        <Modal style = {{marginTop: '15%'}} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{verifier.name} Required Vaccines</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {(vaccinations?.length > 0) ? renderVaccinations() : <p>No Required Vaccines</p>}
          </Modal.Body>
          {(vaccinations?.length > 0 && (!auth?.user || auth?.user.role === "user")) &&
            <Modal.Footer>
              {vaccinations?.length > 0 && auth?.user && <><p>Requirements met? </p> {compareVaccines(userVaccinations, vaccinations)}</>}
              {!auth?.user && <a href="/login">Login to see if you meet {verifier.name}'s requirements.</a>}
            </Modal.Footer>
          }
        </Modal>
        
      </>
    );
  }

  const renderVaccinations = () => {
    return vaccinations.map(vaccination => {
      return(
            <p key={vaccination.required_vaccines_id}>{vaccination.vaccine_name}</p>
      )
    })
  }

  if(vaccinations && vaccinations.length >= 1){return (
    <Card style={{margin: '10px', width: '300px', height: 'auto'}}>

      <Card.Body>
        {vaccinations?.length > 0 ? 
          <a style={{ cursor: 'pointer' }} onClick={handleShow}><h4>{verifier.name}</h4></a>
        :
          <h4>{verifier.name}</h4>
        }
        <p>Requires {vaccinations ? vaccinations.length.toString() : "0"} vaccines</p>
      </Card.Body>
      {vaccinations?.length > 0 &&
      <Card.Footer>
        {requiredVaccModal()}
      </Card.Footer>
      }    
    </Card>

  )}else{return null}
}

export default VerifierCard
