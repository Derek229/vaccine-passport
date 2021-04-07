import axios from 'axios'
import React, { useState, useEffect} from 'react'
import Card from '../../components/Card'
import {useHistory} from 'react-router-dom'

//TODO: show user submissions, sorted by verified, pending, and failed

const Wallet = (props) => {
  //get user info from props for axios call in getSubmission fn.
  const {user} = props

  const history = useHistory
  
  const [submissions, setSubmissions] = useState([])

  //TODO: add useEffect to get user's wallet info on mount

  const getSubmissions = async () => {
    //get user's submissions
    let res = await axios.get(`/api/users/${user.id}/submissions`)

    //TODO: setSubmissions => res.data.submissions (check what data is in res)
  }

  const renderWallet = () => {
    //TODO: create card for all user's submissions (return submissions.map(submission => {}))
    return(
      <>
        <Card>
            <h2>Submission name here</h2>
            <h4>submission details here</h4>
        </Card>
      </>
    )
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
