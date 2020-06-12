import React from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';

import NewPlaces from './places/pages/NewPlaces/NewPlace';

import UserPlaces from './places/pages/UserPlace/UserPlaces';

import UpdatePlace from './places/pages/UpdatePlace/UpdatePlace';

import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';

import Auth from './user/pages/Auth/Auth';

const App = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/places/new" component={NewPlaces} />
          <Route exact path="/users/:id/places" component={UserPlaces} />
          <Route exact path="/places/:placeId/update" component={UpdatePlace} />
          <Route exact path="/auth" component={Auth} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
};

export default App;
