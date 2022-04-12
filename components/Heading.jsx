import React, { Component } from "react";

function Heading(props){

    return <div className="header">
        <div><h1>WORKOUT GENERATOR</h1></div>
        <div className="menu">
        <button><a href="/">Home</a></button>
        <button name='saved' onClick={(e)=>props.saved(e.target.name)} type="submit">Saved Workouts</button>
        </div>
        </div>

}

export default Heading;