import { Link } from "react-router-dom";
import "../css/home.css";

export default function Homepage() {
  return (
    <div id='home-pg'>
      <div className='ft-banner'>
        <div className='welcome'>
          <div className='welcome-statement'>
            <h1>Welcome to Fitness track.r</h1>
            <div>Keep Track of Your Exercises!</div>
            <div className='second'>
              Login or Register and get in shape today!
            </div>
            <Link to='/login'>Login/Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
