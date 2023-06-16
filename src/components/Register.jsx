import { useState } from "react"
import { userRegister } from "../api";
import { useNavigate, useOutletContext } from "react-router-dom";

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
    <div>
        <h1 id="header">Register</h1>
        <form onSubmit={handleRegister} id="registration">
            <input placeholder="username" onChange={(event) => setUsername(event.target.value)} value={username}
            />
            <input placeholder="password" type="password" onChange={(event) => setPassword(event.target.value)} value={password}
            />
            <input placeholder="confirm" type="password" onChange={(event) => setConfirm(event.target.value)} value={confirm}
            />
            <div id="reg-err">{error}</div>
            <button id="reg-btn">Register</button>
        </form>
    </div> 

    )
}