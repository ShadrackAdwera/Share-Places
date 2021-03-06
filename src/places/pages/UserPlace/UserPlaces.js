import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useHttpClient } from '../../../shared/hooks/http-hook';

import Spinner from '../../../shared/components/UIElements/Error/LoadingSpinner';

import ErrorModal from '../../../shared/components/UIElements/Error/ErrorModal';

import PlaceList from '../../components/PlaceList/PlaceList';

const UserPlaces = (props) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().userId;

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/places/user/${userId}`
        );
        setLoadedPlaces(responseData.places);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlaces();
  }, [sendRequest, userId]);

  const placeDeletedHandler = (deletedPlaceId) => {
    setLoadedPlaces(prevPlaces => prevPlaces.filter(place=>place.id !==deletedPlaceId))
  }

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <Spinner />
        </div>
      )}
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />})
    </React.Fragment>
  );
};

export default UserPlaces;
