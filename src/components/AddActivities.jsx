import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";
import { BASE_URL} from "../api";


export default function AddActivities() {
    const [count, setCount] = useState("");
    const [duration, setDuration] = useState("");
    const [activity, setActivity] = useState(null);
   
    const {activities} = useOutletContext();

    const { routineId } = useParams();

    const navigate = useNavigate();

    function handleSubmit(activityId) {
      return async function (event) {
        event.preventDefault();
          try{
          const response = await fetch(`${BASE_URL}/api/routines/${routineId}/activities`, {
              method: "POST",
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                activityId,
                count, 
                duration
              })
            });
            const result = await response.json();
            console.log(result);
            setDuration("");
            setCount("");
            navigate("/myroutines")
          } catch (error) {
            console.error(error)  
          }
        }  
      }

    return(
      <div id="addactivities-pg">
        <h1 id="header">Add Activities</h1>
        <form onSubmit={handleSubmit(activity)} id="addactivities-form">
        <input placeholder="count" onChange={(event) => setCount(event.target.value)}value={count}></input>
        <input placeholder="duration" onChange={(event) => setDuration(event.target.value)} value={duration}></input>
        <select onChange={(event) => setActivity(event.target.value)}>
          {activities.map((activity) => (<option key={activity.id} value={activity.id}>{activity.name}</option>))}
        </select>
        <button id="activity-btn">Add Activity</button>
        </form>
      </div>
    )
}