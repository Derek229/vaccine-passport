import axios from 'axios'
import React, { useState, useEffect} from 'react'
import Card from '../../components/Card'
import {useHistory} from 'react-router-dom'

//TODO: show user submissions, sorted by verified, pending, and failed

const Wallet = (props) => {
  //get user info from props for axios call in getSubmission fn.
  const {userId} = props

  const history = useHistory
  
  const [myVaccines, setMyVaccines] = useState([])

  //TODO: add useEffect to get user's wallet info on mount

  useEffect(()=> {
    getVaccines()
  }, [])

  const getVaccines = async () => {
    //get user's submissions
    //update 1 in url below so it uses userId from props instead
    //wait for backend update and change url so that it grabs all vaccines associated with specific user
    let res = await axios.get(`/api/users/1/vaccines`)

    setMyVaccines(res.data)


    //TODO: setSubmissions => res.data.submissions (check what data is in res)
  }

  const renderWallet = () => {
    //TODO: create card for all user's submissions (return submissions.map(submission => {}))
    return myVaccines.map( vaccine => {
      return(
        <>
          <Card>
              <h2>Name: {vaccine.name}</h2>
              <h3>MFG: {vaccine.manufacturer}</h3>
              <h4>Verified?: {vaccine.verified}</h4>
          </Card>
        </>
      )
    })
  }


  return (
    <>
    <div>
      <h1>user wallet here</h1>
      {renderWallet()}
    </div>
    </>
  )
}

export default Wallet
