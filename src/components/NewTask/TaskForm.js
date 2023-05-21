import React, { useRef, useEffect, useState } from 'react';

import classes from './TaskForm.module.css'; 
const TaskForm = (props) => {

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
