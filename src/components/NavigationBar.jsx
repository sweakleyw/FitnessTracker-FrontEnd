import { Link } from "react-router-dom";

export default function Navbar({ user, setToken, setUser }) {
   function handleLogout() {
      localStorage.removeItem("token");
      setToken("");
      setUser({});
  }
    return (
    <div>
     <nav className="main">
     <span id="fitness">Fitness</span><span id="tracker">track.r</span>
        <Link to={`/`}>Home</Link>
        <Link to={`/routines`}>Routines</Link>
        <Link to={`/activities`}>Activities</Link>
        {user.id && (
         <>
            <Link to="/myroutines" >My Routines</Link>
            <Link onClick={handleLogout} to={"/"}>Logout</Link>
         </>
        )}
        {!user.id && (
         <>
            <Link to="/login" >Login/Register</Link>
         </>
        )}
     </nav>
     <nav className="user-nav">
        {user.id && (
         <>
            <Link to="/newroutine" >Create Routine</Link>
            <Link to="/newactivity" >Create Activity</Link>
         </>
        )}
     </nav>
    </div>
    )
 }