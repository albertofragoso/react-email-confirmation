import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Notifications from 'react-notify-toast'
import Landing from './components/Landing'
import Confirm from './components/Confirm'
import Loader from './components/Loader'
import { Mycontext } from './context'
import Navbar from './components/Navbar';

const Router = () => {
  return (
    <Mycontext.Consumer>
      {
        ({ loading }) => {

          if(loading) return <Loader />

          return (
            <BrowserRouter>
              <Navbar />
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
}

export default Router