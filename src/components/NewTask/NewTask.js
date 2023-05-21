import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

import usePost from '../../custom-hooks/usePost';


const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

    
  const [enterTaskHandler, error, isLoading] = usePost();
  const addToList = (task) => {
    props.setList((tasks) => [...tasks, task]);
  }
  const submitHandler = async (enteredValue) => {
    // const enteredValue = taskInputRef.current.value;
    // console.log(enteredValue);
    enterTaskHandler(enteredValue, addToList);
  }

  return (
    <Section>
      <TaskForm submitHandler={submitHandler} isLoading={isLoading}/>
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
