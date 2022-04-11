import React, { Component } from "react";
import Card from "./Card";

function Body(props) {

    

    return (
    <div className="body">
      <div>
        <button
          className="body-btn"
          onClick={props.showCard}
          type="submit"
        >
          Upper Body
        </button>
        <button className="body-btn" type="submit">
          Lower Body
        </button>
        <button className="body-btn" type="submit">
          Full Body
        </button>
      </div>
    </div>
  );
}

export default Body;
