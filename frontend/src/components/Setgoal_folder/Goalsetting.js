import style_Goalsetting from './CSS/style_Goalsetting.css';
import axios from "axios";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function Goalsetting(){



 const [targetCal, setTargetCal] = useState("");
  const [calin, setCalin] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:2080/goal/create", {userID, targetCal, calin, time })
      .then((res) => {
        alert("Successful")
        console.log(res.data);
        // Clear input fields after successfully adding a goal
        setTargetCal("");
        setCalin("");
        setTime("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="NT_backgroundgoal">
      <h2 className="goaltext">Add Goal Your Nutrition Goal</h2>
      <form onSubmit={handleSubmit}>
      <label className="goaltext">Target Calories:    (cal)    </label>

          <input className='NT_setgoal'
            type="number"
            value={targetCal}
            onChange={(event) => setTargetCal(event.target.value)} required
          />
        <label className="goaltext"> Calories In:  (cal) </label>

        <input className='NT_setgoal'
            type="number"
            value={calin}
            onChange={(event) => setCalin(event.target.value)} required
          />
        <label className="goaltext"> Time:(Week) </label>

        <input className='NT_setgoal'
          placeholder="3"
            type="number"
            value={time}
            onChange={(event) => setTime(event.target.value)} required
          />
  <div className="center goal-buttons">
  <Link to="/viewgoal/">
    <button type="button" className="btn btn-success">View Goal</button>
  </Link>
  <button className="btn btn-success" type="submit">Set Goal</button>

</div>

      </form>
      <br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/>
    </div>
  );
}


    
