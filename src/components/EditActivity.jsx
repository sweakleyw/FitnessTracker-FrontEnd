import React from "react";
import { useState } from "react";
import { Link, useNavigate, useOutletContext, useParams} from "react-router-dom";
import { BASE_URL } from "../api";


export default function EditActivity() {
    const [count, setNewCount] = useState("");
    const [duration, setNewDuration] = useState("");
   
    const [error, setError] = useState("");

    const { routineActivityId } = useParams();

    const { routines, user, token, setRoutines } = useOutletContext();

    const navigate = useNavigate();

    async function handleSubmit(event){
      event.preventDefault()
          try {
            const response = await fetch(`${BASE_URL}/api/routine_activities/${routineActivityId}`, {
              method: "PATCH",
              headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                count,
                duration
              })
            });
            const result = await response.json();
            console.log(result);
            // setRoutines(result);
            navigate("/myroutines")
          } catch (error) {
            console.error(error);
          }
      }

  
    return ( 
    <div>
      {/* {user.id && (
        <> */}
         <h1 id="header">Edit Activity</h1>
         <form onSubmit={handleSubmit} id="editactivities-form">
           <input placeholder="New Count" onChange={(event) => setNewCount(event.target.value)} value={count}></input>
           <input placeholder="New Duration" onChange={(event) => setNewDuration(event.target.value)} value={duration}></input>
           <div id="reg-err">{error}</div>
           <button id="activity-btn">Edit Activity</button>
         </form>
        {/* </>
        )} */}
        
    </div>
    )
}