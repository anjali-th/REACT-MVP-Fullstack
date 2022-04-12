import React, { Component, useEffect, useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Body from "./Body";
import Card from "./Card";

function App(){

  const [ result, setResult] = useState([]);// API data
  const [ workoutType, setWorkoutType] = useState('upper')

  function handleClick(type){
    setWorkoutType(() => type);
    apiRequest(type);
  }
  
  function apiRequest(type){
    fetch(`http://localhost:3000/workout/${type}`, {
      mode: 'cors'
    })
    .then((res) => res.json())
    .then(data => setResult(data))    
    .catch(err => console.log('error'))
  }
  
  return (
    <div>
      <Heading/>
      <Body showCard={handleClick} />
      <Card info={result}/>
      <Footer/>
    </div>
  );
}

export default App;