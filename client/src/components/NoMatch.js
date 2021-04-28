import React from 'react' 
import {Link,  } from "react-router-dom"
import { Header,  } from 'semantic-ui-react'

const NoMatch = () => (
  <Header as='h3' textAlign='center'>
    <p style={{paddingRight: '10px', margin: '10px 0 0 0 '}}>page not found </p>
    <Link style={{padding: '0px', margin: '10px 0 0 0'}} to='/'> return home</Link>
  </Header>
)

export default NoMatch
