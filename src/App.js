import React from 'react';

import { Route, Redirect, Switch } from 'react-router-dom'

import Users from './user/pages/Users'

import NewPlaces from './places/pages/NewPlace'

const App = () => {
  return (
      <Switch>
      <Route exact path='/' component={Users}/>
      <Route exact path='/places/new' component={NewPlaces}/>
      <Redirect to = '/'/>
      </Switch>
  )
}

export default App;