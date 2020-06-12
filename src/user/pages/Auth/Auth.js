import React from 'react';

import Input from '../../../shared/components/UIElements/FormElements/Inputs/Input';

import Button from '../../../shared/components/UIElements/FormElements/Button/Button';

import Card from '../../../shared/components/UIElements/Card/Card';

import { useForm } from '../../../shared/hooks/form-hook';

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from '../../../shared/utils/Validators';

import './Auth.css';

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      <h3>Login Required</h3>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          id="email"
          type="email"
          element="input"
          placeholder="example@mail.com"
          label="Email"
          onInput={inputHandler}
          errorText="Enter a valid email fool"
          validators={[VALIDATOR_EMAIL()]}
        />
        <Input
          id="password"
          type="password"
          element="input"
          placeholder="***"
          label="Password"
          errorText="Password must be 6 characters or more"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(6)]}
        />
        <Button type="submit" disabled={!formState.isValid}>
          SIGN IN
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
