import React, { useState, useCallback } from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';

import NewPlaces from './places/pages/NewPlaces/NewPlace';

import UserPlaces from './places/pages/UserPlace/UserPlaces';

import UpdatePlace from './places/pages/UpdatePlace/UpdatePlace';

import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';

import Auth from './user/pages/Auth/Auth';

import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/users/:id/places" component={UserPlaces} />
        <Route exact path="/places/new" component={NewPlaces} />
        <Route exact path="/places/:placeId/update" component={UpdatePlace} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/users/:id/places" component={UserPlaces} />
        <Route exact path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <React.Fragment>
        <MainNavigation />
        <main>
            {routes}
        </main>
        <AuthContext.Provider></AuthContext.Provider>
      </React.Fragment>
    </AuthContext.Provider>
  );
};

export default App;
