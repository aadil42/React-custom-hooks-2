import {useState, useCallback} from 'react';

const useGet = () => {
    console.log('hehe this is getting called');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTasks = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(
            'https://http-request-2-with-react-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'
          );
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
    
          const loadedTasks = [];
    
          for (const taskKey in data) {
            loadedTasks.push({ id: taskKey, text: data[taskKey].text });
          }

        setIsLoading(false);
        return loadedTasks;
        } catch (err) {
          setIsLoading(false);
          setError(err.message || 'Something went wrong!');
        }
      },[setIsLoading, setError]);    

      return [fetchTasks, error, isLoading, setError, setIsLoading];
}

export default useGet;