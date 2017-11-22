import React from 'react';
import CreateEditTodo from './CreateEditTodo';

const CreateTodo = ({ history }) => {
  return (
    <CreateEditTodo onSubmit={() => {
      history.push('/');
    }}/>
  );
};

export default CreateTodo;