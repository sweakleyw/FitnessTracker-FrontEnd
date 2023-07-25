import React from "react";
import { useOutletContext } from "react-router-dom";
import "../css/activities.css";

export default function AllActivities() {

    const {activities, user, token} = useOutletContext();
    // console.log(activities)

    return(
     <div id="activities">
      <h1 id="header">Activities</h1>
      <div className="activity-containter">
      {activities.map((activity) => {
          return (
          <div id="activitiespg" key={activity.id}>
            <div id="act-name">{activity.name}</div>
            <div id="act-des">Description: {activity.description}</div>
          </div>
        );})}   
      </div>
    </div>
    )
}