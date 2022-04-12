import React, { Component } from "react";

function Card(props) {

    // maybe add an "add" icon on each card, so that the user can add to their "saved workouts"

  return (
    <div className="body">
      {props.info.map((item) => (
        <div key={item.id} className="card">
            <h1>{item.type.toUpperCase()} BODY {item.set}</h1>
            <p>
            <br />
            {item.exercise1}
            <br />
            {item.exercise2}
            <br />
            {item.exercise3}
            <br />
            {item.exercise4}
            <br />
            {item.exercise5}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;
