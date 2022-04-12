const express = require("express");
const { Pool } = require('pg');
const cors = require("cors");

const pool = new Pool({
  database:'workoutDb',
});

const app = express();
app.use(cors());

app.get('/workout/upper',(req, res) => {
  pool.query(`SELECT * FROM workoutRoutine WHERE type='upper'`, (err, result) =>{
    if (err){
      res.sendStatus(500);
    }else{
      res.send(result.rows);
    }
  })
})

app.get('/workout/lower',(req, res) => {
  pool.query(`SELECT * FROM workoutRoutine WHERE type='lower'`, (err, result) =>{
    if (err){
      res.sendStatus(500);
    }else{
      res.send(result.rows);
    }
  })
});

app.get('/workout/full',(req, res) => {
  pool.query(`SELECT * FROM workoutRoutine WHERE type='full'`, (err, result) =>{
    if (err){
      res.sendStatus(500);
    }else{
      res.send(result.rows);
    }
  })
})

app.listen(3000, () => {
  console.log("listening on port 3000");
});