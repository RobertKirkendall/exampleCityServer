import express from 'express';
import pg from 'pg';

const { Pool } = pg;

const app = express();
const expressPort = 9000;

const pool = new Pool ({
  user: 'kevingoble',
  host: 'localhost',
  database: 'geo',
  port: 5432
});

app.use(express.json())

app.get('/cities', (req, res) => {
  //query the database for city data
  pool.query('SELECT * FROM cities')
    .then((result) => res.send(result.rows))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Sorry your city not found");
    });
});

app.post('/cities', (req, res)=>{
  let {name, population, state, mayor} = req,body
  pool.query('INSERT INTO cities VALUES($1, $2, $3, $4)')
})

app.listen(expressPort, ()=> console.log('Listening at port ', expressPort));