import React, {useState, useEffect, useContext} from 'react'
import { Container, CardGroup} from 'react-bootstrap'
import VerifierCard from './VerifierCard'
import axios from 'axios'
import InPageNav from '../../components/InPageNav'
import { AuthContext } from '../../providers/AuthProvider'
import SiteStats from '../../components/SiteStats'

const AllVerifiers = () => {

  const [verifiers, setVerifiers] = useState(null)
  const [userVaccinations, setUserVaccinations] = useState(null)

  const auth = useContext(AuthContext)

  useEffect(() => {
    getVerifiers()
    if(auth?.user){
      getUserVaccinations()
    }
  },[])

  const getVerifiers = async () => {
    try{
    let res = await axios.get(`/api/users/verifiers`)
    setVerifiers(res.data)
    }catch(err){
      alert('unable to retrieve verifier data')
    }
  }

  const getUserVaccinations = async () => {
    try{
      let res = await axios.get(`/api/vaccinations/${auth.user.id}`)
      setUserVaccinations(res.data)
      console.log('user vaccinations: ', res.data)
    }catch(err){
      alert('error retrieving your vaccinations')
    }
  }

  const renderVerifiers = () => {
    return verifiers.map(verifier => {
      return(
        <VerifierCard key={verifier.id} verifier={verifier} auth={auth} userVaccinations={userVaccinations}/>
      )
    })
  }

  return (
    <>
    <InPageNav auth={auth}/>
    <Container style={{marginTop: '10px'}}>
      <SiteStats pageName="All Verifiers"/>
      <CardGroup style={{paddingBottom: '20px'}}>
        {verifiers && renderVerifiers()}
      </CardGroup>
    </Container>
    </>
  )
}

export default AllVerifiers
