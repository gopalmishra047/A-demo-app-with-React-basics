//import classes from '*.module.css';
import React, { useState } from 'react';
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0 || +age < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age',
      });
      return;
    }
    console.log(name, age);
    props.onAddUser(name, age);
    setName('');
    setAge('');
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
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
          <input
            id='username'
            type='text'
            value={name}
            onChange={nameChangeHandler}
          ></input>
          <label htmlFor='age'>Age:</label>
          <input
            id='age'
            type='number'
            value={age}
            onChange={ageChangeHandler}
          ></input>
          <Button type='submit'>Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
