import React, { Component } from "react";

const date = new Date();
const year  = date.getFullYear();
// const year = date.currentYear();

function Footer(){
    return <div className="footer">
        <p>Workout Generator ©{year} </p>
    </div>
}

export default Footer;