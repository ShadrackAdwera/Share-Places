import React from 'react';

import { Route, Redirect, Switch } from 'react-router-dom'

import Users from './user/pages/Users'

import NewPlaces from './places/pages/NewPlaces/NewPlace'

import UserPlaces from './places/pages/UserPlace/UserPlaces'

import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation'

const App = () => {
  return (
    <div>
    <MainNavigation />
    <main>
      <Switch>
      <Route exact path='/' component={Users}/>
      <Route exact path='/places/new' component={NewPlaces}/>
      <Route exact path='/users/:id/places' component={UserPlaces} />
      <Redirect to = '/'/>
      </Switch>
    </main>
    </div>
  )
}

export default App;