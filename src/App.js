import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

// import custom hooks
import useGet from './custom-hooks/useGet';

function App() {
  const [tasks, error, isLoading] = useGet();
  
  return (
    <React.Fragment>
      {/* <NewTask onAddTask={taskAddHandler} /> */}
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        // onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
