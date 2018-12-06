const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

app.use(morgan('dev'));
app.use(express.json());

/* Connect to pg */
const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/albums';
const client = new Client(dbUrl);
client.connect();
/* end connect pg */

console.log('i am the server file');
 
/* Defined routes: METHOD, URL PATH */
app.get('/api/albums', (req, res) => {
  client.query(`
  SELECT id, name FROM album;
`)
    .then(result => {
      res.json(result.rows);
    });

});
app.get('/api/albums/:id', (req, res) => {
  client.query(`
    SELECT * FROM album WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/albums', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO album (name, year, description, rating)
    VALUES($1, $2, $3, $4)
    RETURNING id, name, year, description, rating;
  `,
  [body.name, body.year, body.description, body.rating])
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;
app.listen(PORT, () => 
{
  console.log('running on', PORT);
});
