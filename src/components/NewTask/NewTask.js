import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

import usePost from '../../custom-hooks/usePost';


const NewTask = (props) => {
    
  const [enterTaskHandler] = usePost(props.setError, props.setIsLoading);
  const addToList = (task) => {
    props.setList((tasks) => [...tasks, task]);
  }
  const submitHandler = async (enteredValue) => {
    enterTaskHandler(enteredValue, addToList);
  }

  return (
    <Section>
      <TaskForm submitHandler={submitHandler} isLoading={props.isLoading}/>
      {props.error && <p>{props.error}</p>}
    </Section>
  );
};

export default NewTask;
