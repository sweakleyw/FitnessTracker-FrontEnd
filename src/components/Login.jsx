import React from "react";
import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { userLogin } from "../api";

import "../css/logReg.css";

export default function Login() {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginConfirm, setLoginConfirm] = useState("");
    const [error, setError] = useState("");

    const { setToken } = useOutletContext();

    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();

        if (loginPassword !== loginConfirm) {
            setError(error);
            return;
           }

         const result = await userLogin(loginUsername, loginPassword);
         
         if (result.error) {
            setError(result.error);
            return;
          }

          setToken(result.token);
          localStorage.setItem("token", result.token)
          navigate("/myroutines");  
        }

    
    return(
     <div id="log-reg-container">
      <div className="log-reg-wrapper">
         <h1 id="header">Login</h1>
        <div className="forms">
          <form onSubmit={handleLogin} className="logging-in">
            <input placeholder="username" onChange={(event) => setLoginUsername(event.target.value)} value={loginUsername}
            />
            <input placeholder="password" type="password" onChange={(event) => setLoginPassword(event.target.value)} value={loginPassword}
            />
            <input placeholder="confirm" type="password" onChange={(event) => setLoginConfirm(event.target.value)} value={loginConfirm}
            />
            <div id="reg-err">{error}</div>
            <button className="log-in">Login</button>
            <div>No account? 
                <Link to="/register" ><span>Register</span></Link>
            </div>
          </form>
       </div>
      </div>
     </div>
    )
}