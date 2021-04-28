import React, { useState } from 'react'
import axios from 'axios'


export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

const AuthProvider=(props) => {

const  [user,setUser] = useState(null)
const [authErrors, setAuthErrors] = useState([])
const [authLoading, setAuthLoading] = useState(false)

// function timeoutPromise(interval) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function (){
//       resolve('done')
//     }, interval) 
//   })
// }

const resetProvider = () => {
  setAuthLoading(true)
  setAuthErrors([])
}

const handleRegister = async (user, history) => {
  try {
    resetProvider()
    let res = await axios.post('/api/auth', user)
    setUser(res.data.data)
    history.push("/")
  } catch(err){
    console.log(err)
    setAuthErrors(err.response.data.errors)
  } finally {
    setAuthLoading(false)
  }
}

const handleLogin = async (user, history) => {
  
  try {
    resetProvider()
    let res = await axios.post('/api/auth/sign_in', user)
    setUser(res.data.data)
    history.push("/")
  } catch(err) {
    console.log('login error: ', err)
    setAuthErrors(err.response.data.errors)
  }finally{
    setAuthLoading(false)
  }
}

const handleLogout = async (history) => {
  try {
    setAuthErrors ([]) 
    await axios.delete('/api/auth/sign_out')
    setUser(null)
    history.push('/')
  } catch (err) {
    setAuthErrors(err.response.data)
  } finally {
    setAuthLoading(false)
  }
}
  return (
    <AuthContext.Provider
    value={{
      user,
      authErrors,
      authLoading,
      setAuthErrors,
      authenticated: user !== null,
      handleRegister: handleRegister,
      handleLogin: handleLogin,
      handleLogout: handleLogout,
      setUser: (user) => setUser(user),
    }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
