// import {useState, useEffect} from 'react';

// const useFetch = (type, data = null) => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [tasks, setTasks] = useState([]);

//     const fetchTasks = async () => {
//         setIsLoading(true);
//         setError(null);
//         try {
//           const response = await fetch(
//             'https://http-request-2-with-react-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'
//           );
    
//           if (!response.ok) {
//             throw new Error('Request failed!');
//           }
    
//           const data = await response.json();
    
//           const loadedTasks = [];
    
//           for (const taskKey in data) {
//             loadedTasks.push({ id: taskKey, text: data[taskKey].text });
//           }
    
//           setTasks(loadedTasks);
//         } catch (err) {
//           setError(err.message || 'Something went wrong!');
//         }
//         setIsLoading(false);
//       };    

//       const enterTaskHandler = async (taskText) => {
//         // setIsLoading(true);
//         // setError(null);
//         // try {
//         //   const response = await fetch(
//         //     'https://http-request-2-with-react-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
//         //     {
//         //       method: 'POST',
//         //       body: JSON.stringify({ text: taskText }),
//         //       headers: {
//         //         'Content-Type': 'application/json',
//         //       },
//         //     }
//         //   );
    
//         //   if (!response.ok) {
//         //     throw new Error('Request failed!');
//         //   }
    
//         //   const data = await response.json();
    
//         //   const generatedId = data.name; // firebase-specific => "name" contains generated id
//         //   const createdTask = { id: generatedId, text: taskText };
    
//         //   props.onAddTask(createdTask);
//         // } catch (err) {
//         //   setError(err.message || 'Something went wrong!');
//         // }
//         // setIsLoading(false);
//       };

//       // make post or get request based on type
//       if(type === 'POST') {
//         enterTaskHandler(data);
//       } 
//       if(type === 'GET') {
//         useEffect(() => {
//             fetchTasks();
//         },[]);
//       }

//       return [tasks, error, isLoading];
// }

// export default useFetch;