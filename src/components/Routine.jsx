import { useState } from "react";
import { useNavigate, useOutletContext, useParams} from "react-router-dom"


export default function Routine() {
    const { routineId } = useParams();
    const { routines } = useOutletContext()

    const routine = routines.find((rout) => rout.id === routineId);

    return ( 
    <div>
        <h1>Routine</h1>
    </div>
    )
}