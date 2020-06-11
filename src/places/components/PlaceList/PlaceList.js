import React from 'react';

import Card from '../../../shared/components/UIElements/Card/Card';

import PlaceItem from '../PlaceItem/PlaceItem';

import Button from '../../../shared/components/UIElements/FormElements/Button/Button'

import './PlaceList.css';

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places available. Create one maybe?</h2>
          <Button to='/places/new'>Go to create place</Button>
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
            coordinates={item.location}
          />
        );
      })}
    </ul>
  );
};

export default PlaceList;
