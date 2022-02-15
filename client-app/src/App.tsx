import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      console.log(response.data);
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <h2 className="ui center aligned icon header">
        <i className="circular users icon"></i>
        Reactivities
      </h2>
      <ul>
        <div className="ui list">
          {activities.map((activity: any) => (
            <div className="item" key={activity.title}>
              {activity.title}
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default App;
