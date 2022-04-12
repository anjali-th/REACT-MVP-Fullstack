import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Body from "./Body";
import Card from "./Card";

function App(){

  const [ result, setResult] = useState([]);// API data
  const [ workoutType, setWorkoutType] = useState('upper');

  function handleClick(type){
    setWorkoutType(() => type);
    apiRequest(type);
  }

  function add(item){
    console.log(JSON.stringify(item));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }
    fetch('http://localhost:3000/workout/saved', requestOptions)
    .then(res => res.json())
    .then(data => console.log(data));
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
      <Heading saved={handleClick}/>
      <Body showCard={handleClick} />
      <Card info={result} addWorkout={add}/>
      <Footer/>
    </div>
  );
}

export default App;