import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../pages/ComponentStyles/container.css'
import useWindowDimensions from './useWindowDimensions'

const SiteStats = (props) => {

  const {pageName} = props

  const [stats, setStats] = useState([])
  const {width} = useWindowDimensions()
  const hide = (width <= 760)

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
        {hide === false ? <h2>Stats</h2> : <h2>{pageName}</h2>}
        {hide === false && <h4>Passport Holders: {stats.total_users - 9} | Available Vaccines: {stats.total_vaccines} | Vaccinations Held: {stats.total_vaccinations}</h4>}
      </div>
  )
}

export default SiteStats
