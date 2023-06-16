import { Outlet } from "react-router-dom";
import Navbar from "../components/NavigationBar";
import { useState, useEffect } from "react";
import { getAllRoutines, getAllActivities, userMe } from "../api";


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
            const storedToken = localStorage.getItem("token")
            if(storedToken) {
                setToken(storedToken)
                const fetchMe = await userMe(storedToken);
                setUser(fetchMe)
        }
    }
        fetchUser();
    }, [token])

    useEffect(() => {
        getAllRoutines();
    }, [token])


    return (
        <div>
            <Navbar user={user} setUser={setUser} setToken={setToken} />
            <Outlet context={{routines, activities, setToken, user, setRoutines, token}}/>
        </div>
      );
    }