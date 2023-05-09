import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers =  useLoaderData();
    const [users,setUsers] =useState(loadedUsers);

    console.log(loadedUsers);
    const handleDelete= _id =>{
        // console.log(id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          
            const remening  = users.filter(user=>user._id!==_id);
            setUsers(remening)
          
          console.log(data)
          if(data.deletedCount=== 1){
            alert('deleted')
          }
          
        })

        
    }
  return (
    <div>
      <h2>USers: {users.length}</h2>
      <div>
        { 
            users.map(user=> <p key={user._id}>Name: {user.name}, Email: {user.email}   ,  
                <Link to={`/update/${user._id}`}>

                <button>Update</button>
              </Link>
            
             <button onClick={()=>handleDelete(user._id)}>X</button></p>)
        }
      </div>
    </div>
  );
};

export default Users;
