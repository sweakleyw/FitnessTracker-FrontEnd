import { Outlet } from "react-router-dom";
import Navbar from "../components/NavigationBar";
import { useState, useEffect, useRef } from "react";
import { getAllRoutines, getAllActivities, userMe} from "../api";


export default function Root() {
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    const [token, setToken] = useState("");
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchAllRoutines = async () => {
            const fetchRoutines = await getAllRoutines();
            setRoutines(fetchRoutines)
        }

        fetchAllRoutines();
    }, [])

    useEffect(() => {
        const fetchAllActivities = async () => {
            const fetchActivities = await getAllActivities();
            setActivities(fetchActivities)
        }

        fetchAllActivities();
    }, [])

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token")
            if(token) {
                setToken(token)
                const fetchMe = await userMe(token);
                setUser(fetchMe)
        }
    }
        fetchUser();
    }, [token])

    useEffect(() => {
        getAllRoutines()
    }, [token])




    return (
        <div>
            <Navbar user={user} setUser={setUser} setToken={setToken} />
            <Outlet context={{routines, activities, setToken, user, setUser, token, setRoutines, setActivities,}}/>
        </div>
      );
    }