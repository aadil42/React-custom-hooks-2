import React, { useRef, useEffect, useState } from 'react';

import classes from './TaskForm.module.css';

// import custom hook

import usePost from '../../custom-hooks/usePost';

const TaskForm = (props) => {

  // const dataHandler = (event) => {
  //   event.preventDefault();
  //   const enteredValue = taskInputRef.current.value;
  //   props.setList((preTasks) => [...preTasks, enteredValue]);
  // };
  
  // const taskInputRef = useRef();
  // const [enterTaskHandler, error, isLoading] = usePost();

  // const submitHandler = async () => {
  //   const enteredValue = taskInputRef.current.value;
  //   console.log(enteredValue);
  //   enterTaskHandler(enteredValue, props.setList);
  // }

  const taskInputRef = useRef();

  const testing = (event) => {
        event.preventDefault();
        const enteredValue = taskInputRef.current.value;
        props.submitHandler(enteredValue);
  }

  return (
    <React.Fragment>
    <form className={classes.form} onSubmit={testing}>
      <input type='text' ref={taskInputRef}  />
      <button>{props.isLoading ? 'Sending...' : 'Add Task'}</button>
    </form>
    {/* {error && <p>{error}</p>} */}
    </React.Fragment>
  );
};

export default TaskForm;
