import React from 'react';

import { Link } from 'react-router-dom';

import Avi from '../../shared/components/UIElements/Avatar/Avatar';

import Card from '../../shared/components/UIElements/Card/Card';

import './UserItem.css';

const UserItem = (props) => {
  return (
    <div>
      <li className="user-item">
          <Card className="user-item__content">
            <Link to={`/users/${props.id}/places`}>
              <div className="user-item__image">
                <Avi image={props.image} alt={props.name} />
              </div>
              <div className="user-item__info">
                <h2><strong>{props.name}</strong></h2>
                <h3>
                  {props.placeCount}{' '}
                  {props.placeCount === 1 ? 'Place' : 'Places'}
                </h3>
              </div>
            </Link>
          </Card>
      </li>
    </div>
  );
};

export default UserItem;
