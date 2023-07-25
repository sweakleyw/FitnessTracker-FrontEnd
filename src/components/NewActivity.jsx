import React from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { postActivities } from "../api";

export default function NewActivity() {

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
     <div id="create-activitypg">
      {user.id && (
         <>
            <h1 id="header">Create Activities</h1>
            <form onSubmit={handleSubmit} id="activities-form">
            <input placeholder="Name" onChange={(event) => setName(event.target.value)} value={name}></input>
            <input placeholder="Description" onChange={(event) => setDescription(event.target.value)} value={description}></input>
            <div id="reg-err">{error}</div>
            <button id="activity-btn">Create Activity</button>
        </form>
         </>
        )}
    </div>
    )
}