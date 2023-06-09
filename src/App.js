import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

// import custom hooks
import useGet from './custom-hooks/useGet';

function App() {
  const [fetchTasks, error, isLoading, setError, setIsLoading] = useGet();
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const list = await fetchTasks();
      setTasks(list);
    };
    getTasks();
  }, [fetchTasks]);
  
  return (
    <React.Fragment>
      <NewTask setList={setTasks} setError={setError} setIsLoading={setIsLoading} isLoading={isLoading} error={error}/>
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
