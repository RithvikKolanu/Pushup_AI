import "./App.css"
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button"
import { useState } from "react";

function App() {

  const [userName, setUserName] = useState('');
  const [userHeight, setUserHeight] = useState('0');
  const [userWeight, setUserWeight] = useState('0');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInformation = { userName, userHeight, userWeight };

    fetch('http://localhost:8000/userData', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userInformation)
    })
  }

  return (
    <div className="App">
      <header className="form">
        <br></br>
        <Typography variant="h4" align="center">
          Personal Information
        </Typography>
        
        <br></br>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" required value={userName} onChange={(e) => setUserName(e.target.value)}></input>
          <br></br>
          <label>Height (cm):</label>
          <input type="number" required value={userHeight} onChange={(e) => setUserHeight(e.target.value)}></input>
          <br></br>
          <label>Weight (kg):</label>
          <input type="number" required value={userWeight} onChange={(e) => setUserWeight(e.target.value)}></input>

          <br></br>
          <Button variant="contained" align="center">Submit</Button>
        </form>
      </header>
    </div>
  );
}

export default App;
