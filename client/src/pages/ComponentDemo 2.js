import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import FormattedMessage from '../components/FormattedMessage'
import HookDemo from '../components/HookDemo'
// import HookDemo1 from '../components/HookDemo1'
// import HookDemo2 from '../components/HookDemo2'
// import HookDemo3 from '../components/HookDemo3'
import LoadDataDemo from '../components/LoadDataDemo'
import RegisterForm from '../components/RegisterForm'

const ComponentDemo = ()=>{
    return(
        <>
          <h1>My components</h1>
          <Card header='Loading Data Demo'>
          {/* <h1>HookDemo3</h1>
              <HookDemo3 />
              <h1>HookDemo2</h1>
              <HookDemo2 /> */}
              <h1>HookDemo</h1>
              <HookDemo />
              
          </Card>

          <Card header='Buttons'>
            <Button primary>Primary button</Button>
            <Button >Inverted Button</Button>
          </Card>
          <Card header='Formatted Messages'>
              <FormattedMessage type='alert'>
                  Alert message
              </FormattedMessage>
              <FormattedMessage type='warn'>
                  Warn message
              </FormattedMessage>
              <FormattedMessage>
                  Notify message
              </FormattedMessage>
          </Card>
          <Card header='Form Demo'>
            <RegisterForm />
         </Card>



         </>
    )
}

export default ComponentDemo 