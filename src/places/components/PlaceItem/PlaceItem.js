import React, { useState } from 'react';

import Card from '../../../shared/components/UIElements/Card/Card';

import Button from '../../../shared/components/UIElements/FormElements/Button/Button';

import Modal from '../../../shared/components/UIElements/Modal/Modal';

import Map from '../../../shared/components/UIElements/Map/Map'

import './PlaceItem.css';

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const openMapHandler = () => {
    setShowMap(true);
  };

  const closeMapHandler = () => {
    setShowMap(false);
  };

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true)
  }

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false)
  }

  const confirmDeleteHandler = () => {
    console.log('DELETED...')
    setShowConfirmModal(false)
  }

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className='map-container'>
          <Map center={props.coordinates} zoom={16}/>
        </div>
      </Modal>
      <Modal show={showConfirmModal} onCancel={cancelDeleteHandler} header='Are you sure?' footerClass='place-item__modal-actions' footer={
        <React.Fragment>
          <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
          <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
        </React.Fragment>
      }>
        <h4>This action cannot be undone?</h4>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            <Button to={`/places/${props.id}/update`}>EDIT LOCATION</Button>
            <Button danger onClick={showDeleteWarningHandler}>DELETE LOCATION</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
