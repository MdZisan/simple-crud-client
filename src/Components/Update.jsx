import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Update = () => {
  const {id} =useParams()

  const user =  useLoaderData();
  console.log(user);

const handleUpdateUser=(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
const updatedUser = {name,email};
console.log(updatedUser);

  fetch(`http://localhost:5000/users/${user._id}`,{
    method:'PUT',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(updatedUser)
  })
  .then(res=>res.json())
  .then(data=>{
    
    console.log(data)
  })


}


  return <div>
        <h2>updateing data of {user.name}</h2>
        <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" id=""  defaultValue={user?.name} required/>
        <br />
        <input type="email" name="email" id="" defaultValue={user?.email} required />
        <br />
        <input type="submit" value="Update user" />
      </form>


  </div>;
};

export default Update;
