import { useState } from "react"
import { userRegister } from "../api";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

import "../css/logReg.css";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");

    const { setToken } = useOutletContext();

    const navigate = useNavigate();

    async function handleRegister(event) {
        event.preventDefault()
        // console.log(username, password, confirm);

        if (password !== confirm) {
         setError(error);
         return;
        }

        const result = await userRegister(username, password)
        console.log(result)

        
          if (result.error) {
            setError(result.error);
            return;
          }

          setToken(result.token);
          localStorage.setItem("token", result.token);
          navigate("/myroutines");
    }

    return (
    <div id="log-reg-container">
      <div className="log-reg-wrapper">
         <h1 id="header">Register</h1>
        <div className="forms">
        <form onSubmit={handleRegister} className="registration">
            <input placeholder="username" onChange={(event) => setUsername(event.target.value)} value={username}
            />
            <input placeholder="password" type="password" onChange={(event) => setPassword(event.target.value)} value={password}
            />
            <input placeholder="confirm" type="password" onChange={(event) => setConfirm(event.target.value)} value={confirm}
            />
            <div id="reg-err">{error}</div>
            <button className="reg-btn">Register</button>
            <div>Have an account? 
                <Link to="/login" ><span>Login</span></Link>
            </div>
        </form>
        </div>
      </div>
    </div> 
    )
}