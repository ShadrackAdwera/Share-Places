import React, { useEffect, useState, useContext } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import Input from '../../../shared/components/UIElements/FormElements/Inputs/Input';

import Button from '../../../shared/components/UIElements/FormElements/Button/Button';

import Card from '../../../shared/components/UIElements/Card/Card';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../../shared/utils/Validators';

import { useForm } from '../../../shared/hooks/form-hook';

import { useHttpClient } from '../../../shared/hooks/http-hook';

import { AuthContext } from '../../../shared/context/auth-context';

import Spinner from '../../../shared/components/UIElements/Error/LoadingSpinner';

import ErrorModal from '../../../shared/components/UIElements/Error/ErrorModal';

import '../NewPlaces/PlaceForm.css';

const UpdatePlace = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [loadedPlace, setLoadedPlace] = useState();

  const placeId = useParams().placeId;

  const history = useHistory();

  const auth = useContext(AuthContext);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/places/${placeId}`
        );
        setLoadedPlace(responseData.place);
        setFormData(
          {
            title: {
              value: responseData.place.title,
              isValid: true,
            },
            description: {
              value: responseData.place.description,
              isValid: true,
            },
          },
          true
        );
      } catch (error) {}
    };
    fetchPlace();
  }, [sendRequest, placeId, setFormData]);

  if (isLoading) {
    return (
      <div className="center">
        <Spinner />
      </div>
    );
  }

  if (!loadedPlace && !error) {
    return (
      <div className="center">
        <Card>
          <h4>Could not find place</h4>
        </Card>
      </div>
    );
  }

  const updateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/api/places/${placeId}`,
        'PATCH',
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
        }),
        {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        }
      );
      history.push('/users/' + auth.userId + '/places');
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && loadedPlace && (
        <form className="place-form" onSubmit={updateSubmitHandler}>
          <Input
            type="text"
            id="title"
            element="input"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Enter a valid title"
            onInput={inputHandler}
            value={loadedPlace.title}
            valid={true}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Enter a valid description"
            onInput={inputHandler}
            value={loadedPlace.description}
            valid={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE PLACE
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdatePlace;
