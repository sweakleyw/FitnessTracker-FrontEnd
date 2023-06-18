import { Link } from "react-router-dom";

export default function Navbar({ user, setToken, setUser }) {
   function handleLogout() {
      localStorage.removeItem("token");
      setToken("");
      setUser({});
  }
    return (
    <div>
     <nav>
     <span id="logo">Fitness Track.r</span>
        <Link to={`/`}>Home</Link>
        <Link to={`/routines`}>Routines</Link>
        <Link to={`/activities`}>Activities</Link>
        {user.id && (
         <>
            <Link to="/myroutines" >My Routines</Link>
            <Link to="/newroutine" >Add Routine</Link>
            <Link onClick={handleLogout} to={"/"}>Logout</Link>
         </>
        )}
        {!user.id && (
         <>
            <Link to="/login" >Login</Link>
            <Link to="/register" >Register</Link>
         </>
        )}
     </nav>
    </div>
    )
 }