import React from "react";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { userLogin } from "../api";


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");

    const { setToken } = useOutletContext();

    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();
        // console.log(username, password, confirm);

         const result = await userLogin(username, password);
         
         if (result.error) {
            setError(result.error);
            return;
          }

          setToken(result.token);
          localStorage.setItem("token", result.token)
          navigate("/myroutines");  
        }

    
    return(
     <div>
      <h1 id="header">Login</h1>
      <form onSubmit={handleLogin} id="logging-in">
            <input placeholder="username" onChange={(event) => setUsername(event.target.value)} value={username}
            />
            <input placeholder="password" type="password" onChange={(event) => setPassword(event.target.value)} value={password}
            />
            <input placeholder="confirm" type="password" onChange={(event) => setConfirm(event.target.value)} value={confirm}
            />
            <div id="reg-err">{error}</div>
            <button id="log-in">Login</button>
        </form>
    </div>
    )
}