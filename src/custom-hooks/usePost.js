// import {useState} from 'react';

// const usePost = (data = null) => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [tasks, setTasks] = useState([]);
  

//       const enterTaskHandler = async (taskText) => {
//         setIsLoading(true);
//         setError(null);
//         try {
//           const response = await fetch(
//             'https://http-request-2-with-react-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
//             {
//               method: 'POST',
//               body: JSON.stringify({ text: taskText }),
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//             }
//           );
    
//           if (!response.ok) {
//             throw new Error('Request failed!');
//           }
    
//           const data = await response.json();
    
//           const generatedId = data.name; // firebase-specific => "name" contains generated id
//           const createdTask = { id: generatedId, text: taskText };
    
//           props.onAddTask(createdTask);
//         } catch (err) {
//           setError(err.message || 'Something went wrong!');
//         }
//         setIsLoading(false);
//       };

//       enterTaskHandler(data);


//       return [tasks, error, isLoading];
// }

// export default usePost;