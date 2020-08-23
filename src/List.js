import React, {useState,useEffect } from 'react';
import axios from 'axios';

const List = ()=>{
    const [users,setUsers]=useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          setUsers(result.data);
          
        };
        fetchData();
      }, []);

    return(
         <ul>
       {users.map(item => (
       <li key={item.id}>
       {item.name}
     </li>
     ))}
   </ul>
    )



}
export default List;