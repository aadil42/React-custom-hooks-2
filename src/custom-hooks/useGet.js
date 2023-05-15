import {useState, useEffect} from 'react';

const useGet = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(
            'https://http-request-2-with-react-default-rtdb.asia-southeast1.firebasedatabase.appr/tasks.json'
          );
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
    
          const loadedTasks = [];
    
          for (const taskKey in data) {
            loadedTasks.push({ id: taskKey, text: data[taskKey].text });
          }
    
          setTasks(loadedTasks);
        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
      };    

      useEffect(() => {
        fetchTasks();
      },[]);

      return [tasks, error, isLoading];
}

export default useGet;