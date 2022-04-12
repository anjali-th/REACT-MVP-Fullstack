const express = require("express");
const { Pool } = require('pg');
const cors = require("cors");

const pool = new Pool({
  database:'workoutDb',
});

const app = express();
app.use(express.json());
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

app.post('/workout/saved',(req, res) =>{
  const { type, set, exercise1, exercise2, exercise3, exercise4, exercise5, id } = req.body;
  pool.query('INSERT INTO savedWorkout (type, set, exercise1, exercise2, exercise3, exercise4, exercise5, routineId) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *', [type, set, exercise1, exercise2, exercise3, exercise4, exercise5, id], (err, result)=>{
    if (err){
    res.sendStatus(500);
    }else{
      res.send(result.rows[0]);
      console.log(result.rows)
    }
  });
});

app.get('/workout/saved',(req, res) => {
  pool.query(`SELECT * FROM savedWorkout`, (err, result) =>{
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