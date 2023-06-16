import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { postRoutine, userMe } from "../api";


export default function MyRoutines() {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(false);

    const [error, setError] = useState("")

    const [myRoutines, setMyRoutines] = useState([]);
    const [myActivities, setMyActivities] = useState([]);
    
    const {user, token} = useOutletContext();

    async function handleSubmit(event){
        event.preventDefault()
    
        if(token) {
            const result = await postRoutine(token, name, goal, isPublic);
            console.log(result)
        }
   
    }

    
    return (
        <div>
            <h1>{user.username}'s Profile</h1>
            <h2>My Routines</h2>
            <form onSubmit={handleSubmit}>
            <input placeholder="Name" onChange={(event) => setName(event.target.value)} value={name}></input>
            <input placeholder="Goal" onChange={(event) => setGoal(event.target.value)} value={goal}></input>
            <label id="public">Public?</label>
            <input type="checkbox" onChange={() => setIsPublic(!isPublic)} value={isPublic}></input>
            <div id="reg-err">{error}</div>
            <button id="create-routine">Create Routine</button>
        </form>
        </div>)
}