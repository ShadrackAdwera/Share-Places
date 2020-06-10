import React from 'react';

import Card from '../../../shared/components/UIElements/Card/Card';

import PlaceItem from '../PlaceItem/PlaceItem';

import './PlaceList.css';

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places available. Create one maybe?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((item) => {
        return (
          <PlaceItem
            key={item.id}
            id={item.id}
            image={item.imageUrl}
            title={item.title}
            description={item.description}
            address={item.address}
            creatorId={item.creator}
            coordinated={item.location}
          />
        );
      })}
    </ul>
  );
};

export default PlaceList;
