import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL} from "../api";


export default function MyRoutines() {
    const [theRoutines, setTheRoutines] = useState([]);
   
    const {user, token, routines, activities} = useOutletContext();
    // console.log(user)

    const { routineActivityId } = useParams();

    const navigate = useNavigate();

    async function getRoutines() {
        const token = localStorage.getItem("token")
        const response = await fetch(`${BASE_URL}/api/users/${user.username}/routines`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          });
          const result = await response.json();
          // console.log(result)
          setTheRoutines(result)
    }
    
    async function handleDelete(routineId) {
          try {
            const response = await fetch(`${BASE_URL}/api/routines/${routineId}`, {
               method: "DELETE",
               headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                    },
               });
               const result = await response.json();
               //   console.log(result)
                setTheRoutines(result);
                navigate("/routines")
          } catch (error) {
            console.error(error)  
         }
      }

      async function handleActivity(routineActivityId) {
        try {
          const response = await fetch(`${BASE_URL}/api/routine_activities/${routineActivityId}`, {
             method: "DELETE",
             headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                  },
             });
             const result = await response.json();
             console.log(result)
             setTheRoutines(result);
             navigate("/routines")
              
        } catch (error) {
          console.error(error)  
       }
    }


    useEffect(() => {
        getRoutines()
    }, [user]);

   

    return (
        <div>
          <h1 id="header">{user.username}'s Routines</h1>
           <div className="my-routs-container">
            {theRoutines && theRoutines.length
            ? theRoutines.map((routine) => {
                // console.log(theRoutines)
                return (
                    <div id="myroutinespg" key={routine.id}>
                        <Link to={`/routines/${routine.id}`}>
                        <div id="rout-name">{routine.name}</div></Link>
                        <div id="rout-goal">Goal: {routine.goal}</div>
                        <Link to={`/routines/${routine.id}`}>
                        <div id="editroutine-btn">Edit Routine</div></Link>
                        <Link to={`/routines/${routine.id}/activities`}>
                        <div id="addactivity-btn">Add Activities</div></Link>
                        <button onClick={() => handleDelete(routine.id)} id="delete-btn">Delete Routine</button>

                        {routine.activities && routine.activities.length 
                        ? routine.activities.map((activity) => 
                        <div key={activity.id}>
                          <div id="routact-name">{activity.name}</div>
                          <div id="routact-des">Description: {activity.description}</div>
                          <div id="routact-dur">Duration: {activity.duration}</div>
                          <div id="routact-count">Count: {activity.count}</div>
                          <Link to={`/routine_activities/${activity.routineActivityId}`}>
                          <div id="editactivity-btn">Edit Activity</div></Link>
                          <button onClick={() => handleActivity(activity.routineActivityId)} id="delete-btn">Delete Activity</button>
                        </div>
                        )
                        : null}
                    </div>
                )
            })
            : null}
           </div>
        </div>
        )
}