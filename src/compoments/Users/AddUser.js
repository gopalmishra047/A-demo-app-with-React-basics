//import classes from '*.module.css';
import React, { useState, useRef } from 'react';
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [error, setError] = useState();
  const inputNameRef = useRef();
  const inputAgeRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const inputName = inputNameRef.current.value;
    const inputAge = inputAgeRef.current.value;
    if (
      inputName.trim().length === 0 ||
      inputAge.trim().length === 0 ||
      +inputAge < 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age',
      });
      return;
    }
    props.onAddUser(inputName, inputAge);
    inputNameRef.current.value = '';
    inputAgeRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onOkayClick={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username:</label>
          <input id='username' type='text' ref={inputNameRef}></input>
          <label htmlFor='age'>Age:</label>
          <input id='age' type='number' ref={inputAgeRef}></input>
          <Button type='submit'>Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
