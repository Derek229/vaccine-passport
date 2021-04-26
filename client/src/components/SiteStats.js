import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../pages/ComponentStyles/container.css'

const SiteStats = () => {

  const [stats, setStats] = useState([])

  useEffect(()=>{
    getStats()
  }, [])

  const getStats = async () => {
    try{
      let res = await axios.get('/api/users/stats')
      setStats(res.data)
    }catch(err){
      alert('error retrieving site statistics')
    }
  }

  return (
      <div className="tablecontainer" style={{backgroundColor: 'white', marginBottom: '15px', marginTop: '15px', padding: '10px'}}>
        <h2>Stats</h2>
        <h4>Passport Holders: {stats.total_users} | Available Vaccines: {stats.total_vaccines} | Vaccinations Held: {stats.total_vaccinations}</h4>
      </div>
  )
}

export default SiteStats
