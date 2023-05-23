import {useState, useEffect} from 'react';

const usePost = (setError, setIsLoading) => {
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);

      const enterTaskHandler = async (taskText, dataHandler) => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(
            'https://http-request-2-with-react-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
            {
              method: 'POST',
              body: JSON.stringify({ text: taskText }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          if (!response.ok) {
            throw new Error('Request failed!');
          }
          const data = await response.json();
          const generatedId = data.name; // firebase-specific => "name" contains generated id
          const createdTask = { id: generatedId, text: taskText };
        //   task = createdTask
          dataHandler(createdTask);
        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
      };


      return [enterTaskHandler];
}

export default usePost;