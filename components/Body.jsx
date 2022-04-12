import React, { Component } from "react";
import Card from "./Card";

function Body(props) {    

  return (
    <div className="body">
      <div>
        <button
          className="body-btn"
          name="upper"
          onClick={(e) => props.showCard(e.target.name)}
          type="submit"
        >
          Upper Body
        </button>
        <button className="body-btn" name="lower"
          onClick={(e) => props.showCard(e.target.name)} type="submit">
          Lower Body
        </button>
        <button className="body-btn" name="full"
          onClick={(e) => props.showCard(e.target.name)} type="submit">
          Full Body
        </button>
      </div>
    </div>
  );
}

export default Body;
