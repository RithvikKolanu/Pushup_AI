import "./App.css";
import "./index.css";
import { Link } from "react-router-dom";

function HomePage () {

    return ( 
        <div className="homepage">
            <br></br>
            <h1>Obese to Deezed</h1>
            <br></br>
            <hr size="10" width="95%" color="white"></hr>
            <br></br>
            <br></br>
            <h4>Select Your Workout</h4>
            <br></br>
            <Link to="/push-up-analyzer" className="button" data-inline="true">Push Ups</Link>
        </div>
    );
}
 
export default HomePage;