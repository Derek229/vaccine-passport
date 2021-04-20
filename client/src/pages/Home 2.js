import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Login from '../components/Login'
import {Link} from 'react-router-dom'

const Home = () => {
  // const [testData, setTestData] = useState(null)
  // useEffect(()=>{
  //       getData()
  // },[])

  // const getData = async()=>{
  //   try{
  //   let res = await axios.get(`/api/api_test`)
  //   setTestData(res.data.dataHere)
  //   } catch(err){
  //     alert('err')
  //   }

  

  return (
    <div>
        <Login/>
        <Link to="/issuerLogin">
    Click here to login or register your company
  </Link>
  <div>
  <Link to='/verifierLogin'>Country origin access</Link>
  </div>
    </div>
  )
}

export default Home