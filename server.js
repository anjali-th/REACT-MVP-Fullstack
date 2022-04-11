const express = require("express");
const { result } = require("lodash");
const { Pool } = require('pg');
const cors = require("cors");

const pool = new Pool({
  database:'workoutDb',
});

const app = express();
app.use(cors());


// app.get("/api/stuff", (req, res) => {
//   res.send("stuff");
// });

app.get('/workout',(req, res) => {
  pool.query('SELECT * FROM workoutRoutine', (err, result) =>{
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