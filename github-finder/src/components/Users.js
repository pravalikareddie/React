import React, { Component } from "react";
import Spinner from "./Spinner";
import UserItem from "./UserItem";

export const Users=({isLoading, users})=>{
 console.log(isLoading)
  if(isLoading){
     return <Spinner></Spinner>;
  }
  else{
    return (
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}>
          {users.map((user) => (
            <UserItem user={user} key={user.id}></UserItem>
          ))}
        </div>
      );
  }
   
  
}

export default Users;
