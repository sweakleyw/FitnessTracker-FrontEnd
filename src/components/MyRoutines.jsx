import { Link, useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../api";
import { userMe } from "../api";


export default function MyRoutines() {
    const [myRoutines, setMyRoutines] = useState([]);
    const [myActivities, setMyActivities] = useState([]);
   
    const {user} = useOutletContext();

    async function getRoutines() {
        const token = localStorage.getItem("token")
        const response = await fetch(`${BASE_URL}/api/users/${user.username}/routines`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          });
          const result = await response.json();
          console.log(result)
          setMyRoutines(result)
    }

    useEffect(() => {
        getRoutines()
    }, [user])
   

    return (
        <div>
            <h1>{user.username}'s Profile</h1>
            <Link to="/newroutine" >Add Routine</Link>
            <h2>My Routines</h2>
            {myRoutines.map((routine) => {
                // console.log(routines)
             if(routine.creatorName === user.username || !routine.isPublic) {
                return (
                    <div key={routine.id}>
                        <Link to={`/routines/${routine.id}`}>
                        <div>Name: {routine.name}</div></Link>
                        <div>Goal: {routine.goal}</div>
                        <div>Creator: {routine.creatorName}</div>
                        <button>Edit Routine</button>
                        <button>Delete Routine</button>
                        {!routine.isPublic && (
                        <>
                            <button>Make Public</button>
                        </>
                        )}

                        {!routine.activity && (
                        <>
                            <button>Add Activity</button>
                        </>
                        )}

                        {routine.activities.map(activity => 
                        <div key={activity.id}>
                        <div>Activity: {activity.name}</div>
                        <div>Description: {activity.description}</div>
                        <div>Duration: {activity.duration}</div>
                        <div>Count: {activity.count}</div>
                        <button>Add Activity</button>
                        <button>Edit Activity</button>
                        <button>Delete Activity</button>
                        </div>
                        )}
                    </div>
                )}
            })}
        </div>)
}