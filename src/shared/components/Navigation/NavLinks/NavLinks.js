import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../../context/auth-context';

import './NavLinks.css';

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  const handleLogout =() => {
    auth.logout()
  }

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/users/u2/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD LOCATION</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTH</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/logout" onClick={handleLogout}>LOG OUT</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
