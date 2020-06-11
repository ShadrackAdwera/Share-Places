import React from 'react';

import Input from '../../../shared/components/UIElements/FormElements/Inputs/Input';

import { VALIDATOR_REQUIRE } from '../../../shared/utils/Validators';

import './NewPlace.css';

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Enter a valid title"
      />
    </form>
  );
};

export default NewPlace;
