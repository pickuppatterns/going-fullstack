const express = require('express');
const app = express();
const morgan = require('morgan');
// const albums = require('./lib/routes/albums');
const client = require('./db-client');

app.use(morgan('dev'));
app.use(express.json());

// /* Connect to pg */
// const Client = pg.Client;
// const dbUrl = 'postgres://localhost:5432/albums';
// const client = new Client(dbUrl);
// client.connect();
/* end connect pg */

console.log('i am the server file');

// app.use('/api/albums', albums)
app.get('/api/albums/:id', (req, res) => {
  client.query(`
    SELECT * FROM album WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.delete('/api/albums/:id', (req, res) => {
  client.query(`
  DELETE FROM album WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json({ removed:result.rowCount === 1 });
    });
});
app.get('/api/albums', (req, res) => {
  client.query(`
    SELECT id, name FROM album;
  `)
    .then(result => {
      res.json(result.rows);
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
app.listen(PORT, () => {
  console.log('running on', PORT);
});
