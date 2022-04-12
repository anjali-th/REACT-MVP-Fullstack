import React, { Component } from "react";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';


function Card(props) {

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
          <button className='add-btn' onClick={()=>props.addWorkout(item)} type='submit'><AddCircleOutlineRoundedIcon/></button>
        </div>
      ))}
    </div>
  );
}

export default Card;
