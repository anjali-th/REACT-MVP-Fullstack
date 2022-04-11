import React, { Component } from "react";

function Heading(){

    return <div className="header">
        <div><h1>WORKOUT FINDER</h1></div>
        <div className="menu">
        <button><a href="/">Home</a></button>
        <button type="submit">Login</button>
        </div>
        </div>

}

export default Heading;