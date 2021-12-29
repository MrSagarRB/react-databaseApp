import React from "react";
import { useState } from "react";


const Contact = () => {
  const[user, setUser]= useState({
    name:"",
    text:"",
  });

let name, value;
  const getUserData=(event) =>{
  name=event.target.name;
  value=event.target.value;

  setUser({...user,[name]:value});

  };


  const postData =async(e)=> { 
    e.preventDefault();

    const {name,text} = user;
    if( name && text){

   

    const res = await fetch(
      "https://formdata-189f4-default-rtdb.firebaseio.com/form-data.json",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },

      body:JSON.stringify({
        name,
        text,
      }),

      
    }

    );

if(res){
  setUser({
    name:"",
    text:"",
  });
  alert("data Stored Successfully")
}
}else{

alert("Plese Fill data")


}




 };













  return (
  

  
    <div>

    <form method="POST">

    <input name="name" autoComplete="off" placeholder='Enter your name...' value={user.name}  onChange={getUserData}  required />
    <br />
    <input name="text" autoComplete="off" placeholder='Messag...' value={user.text}  onChange={getUserData} />
    <br />
    <button onClick={postData}> Submit </button>
    </form>

    </div>
  
  )
}

export default Contact

