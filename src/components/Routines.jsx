import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { getAllRoutines } from "../api";
import { useEffect } from "react";

export default function AllRoutines() {
  const {routines} = useOutletContext();

  // console.log(routines)

  if(!routines) {
    return <></>
  }

  return(
   <div>
    <h1 id="header">Routines</h1>
    {routines && routines.length
    ? routines.map((routine) => {
      if(routine.isPublic) {
      return(
        <div id="routinespg" key={routine.id}>
          <div id="rout-name">{routine.name}</div>
          <div id="rout-goal">Goal: {routine.goal}</div>
          <div id="rout-owner">Creator: {routine.creatorName}</div>

          {routine.activities && routine.activities.length 
          ? routine.activities.map(activity => 
          <div key={activity.id}>
            <div id="routact-name">{activity.name}</div>
            <div id="routact-des">Description: {activity.description}</div>
            <div id="routact-dur">Duration: {activity.duration}</div>
            <div id="routact-count">Count: {activity.count}</div>
          </div>
            ) : null}
        </div>
       )}
      })
    : null}   
  </div>
  )
}