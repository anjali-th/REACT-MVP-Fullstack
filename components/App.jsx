import React, { Component, useEffect, useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Body from "./Body";
import Card from "./Card";

function App(){

  const [ result, setResult] = useState([]);// API data
  const [ isCliked, setIsClicked] = useState(false);

  function handleClick(){
    setIsClicked(prevValue => !prevValue);
  }
  
  useEffect(() => {
    fetch("http://localhost:3000/workout", {
      mode: 'cors'
    })
    .then((res) => res.json())
    .then(data => setResult(data))     
  });

  return (
    <div>
      <Heading/>
      <Body showCard={handleClick}/>
      {isCliked ? <Card/> : null}
      <Footer/>
    </div>
  );
}

export default App;