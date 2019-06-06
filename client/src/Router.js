import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Landing from './components/Landing'
import Confirm from './components/Confirm'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/confirm/:id' component={Confirm} />
      <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>
)

export default Router