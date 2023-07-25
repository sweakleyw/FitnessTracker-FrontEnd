import React from "react";
import { useState } from "react";
import { useNavigate, useOutletContext, useParams} from "react-router-dom"
import { BASE_URL } from "../api";


export default function EditRoutine() {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(false);

    const [error, setError] = useState("")

    const { routineId } = useParams();
    const { routines, setRoutines, token } = useOutletContext()
    // console.log(routines)
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault()
            try {
              const response = await fetch(`${BASE_URL}/api/routines/${routineId}`, {
                method: "POST",
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                  name,
                  goal,
                  isPublic
                })
              });
              const result = await response.json();
              console.log(result);
              return result
            } catch (error) {
              console.error(error);
            }
        }

   
    return ( 
    <div>
        <h1>Edit Routine</h1>
        <form onSubmit={handleSubmit} id="editroutines-form">
         <input placeholder="Name" onChange={(event) => setName(event.target.value)} value={name}></input>
         <input placeholder="Goal" onChange={(event) => setGoal(event.target.value)} value={goal}></input>
         <label id="public">Public?</label>
         <input type="checkbox" onChange={() => setIsPublic(!isPublic)} value={isPublic}></input>
         <div id="reg-err">{error}</div>
         <button id="edit-routine">Edit Routine</button>
        </form>
    </div>
    )
}