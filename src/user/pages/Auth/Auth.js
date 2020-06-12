import React, { useState, useContext } from 'react';

import Input from '../../../shared/components/UIElements/FormElements/Inputs/Input';

import Button from '../../../shared/components/UIElements/FormElements/Button/Button';

import Card from '../../../shared/components/UIElements/Card/Card';

import { useForm } from '../../../shared/hooks/form-hook';

import {AuthContext} from '../../../shared/context/auth-context'

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from '../../../shared/utils/Validators';

import './Auth.css';

const Auth = () => {

  const auth = useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
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
    auth.login()
  };

  const switchModeHandler = () => {
    if (!isLogin) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsLogin((prevMode) => !prevMode);
  };

  return (
    <Card className="authentication">
      <h3>Authentication Required</h3>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLogin && (
          <Input
            element="input"
            id="name"
            type="text"
            label="UserName"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Enter a name"
            onInput={inputHandler}
            placeholder="eg. @deezNuts"
          />
        )}
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
          {isLogin ? 'LOG IN' : 'CREATE ACCOUNT'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        GO TO {isLogin ? 'SIGN UP' : 'LOG IN'}
      </Button>
    </Card>
  );
};

export default Auth;
