import React from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { postActivities } from "../api";

export default function AllActivities() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const {activities, user, token} = useOutletContext();
    // console.log(activities)

    async function handleSubmit(event){
      event.preventDefault()
  
      if (user) {
          const result = await postActivities(token, name, description);
          console.log(result)
          setName("");
          setDescription("");
      }

      if (error) {
        setError(error);
        return;
      }
 
  }
  
  
    return(
     <div>
      {user.id && (
         <>
            <h1 id="header">Create Activities</h1>
            <form onSubmit={handleSubmit} id="activities-form">
            <input placeholder="Name" onChange={(event) => setName(event.target.value)} value={name}></input>
            <input placeholder="Description" onChange={(event) => setDescription(event.target.value)} value={description}></input>
            <div id="reg-err">{error}</div>
            <button id="createactivity-btn">Create Activity</button>
        </form>
         </>
        )}
        
      <h1 id="header">Activities</h1>
      {activities.map((activity) => {
          return (
          <div id="activitiespg" key={activity.id}>
            <div id="act-name">{activity.name}</div>
            <div id="act-des">Description: {activity.description}</div>
          </div>
        );})}   
    </div>
    )
}