import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Notifications from './components/Notifications'
import Landing from './components/Landing'
import Confirm from './components/Confirm'
import Spinner from './components/Spinner'
import { Mycontext } from './context';

const Router = () => (
  <Mycontext.Consumer>
    {
      ({ loading }) => {

        if(loading) return <Spinner size='8x' spinnign='spinning' />

        return (
        <BrowserRouter>
          <Notifications />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/confirm/:id' component={Confirm} />
            <Redirect from='*' to='/' />
          </Switch>
        </BrowserRouter>
        )
      } 
    }
  </Mycontext.Consumer>
)

export default Router