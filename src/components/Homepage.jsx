import fitnessbanner from "../assets/ft.png";

import "../css/home.css";

export default function Homepage() {

    function logReg() {
        window.location.href = "./login";
    }

    return (
    <div id="home-pg">
        <div className="ft-banner">
         <div className="welcome"> 
          <div className="welcome-statement">
             <h1>Welcome to Fitness track.r</h1>
             <div>Keep Track of Your Exercises!</div>
             <div>Login or Register and get in shape today!</div>
             <button onClick={logReg}>Login/Register</button>
          </div>
         </div>
        <img src={fitnessbanner} alt="fitness tracker welcome banner" />
        </div>
    </div>
    )
}