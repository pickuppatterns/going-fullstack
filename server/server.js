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

app.get('/api/genre', (req, res) => {
  client.query(`
  SELECT id, name, short_name as "shortName"
  FROM genre
  ORDER BY name;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

// app.use('/api/albums', albums)
app.get('/api/albums', (req, res) => {
  client.query(`
    SELECT 
      album.id, 
      album.name as name,
      album.year,
      album.description,
      album.rating,
      genre.name as genre
    FROM album 
    JOIN genre
    ON album.genre_id = genre.id
    ORDER BY name;
  `)
    .then(result => {
      res.json(result.rows);
    });
  
});

app.get('/api/albums/:id', (req, res) => {
  client.query(`
    SELECT 
      album.id, 
      album.name as name,
      album.year,
      album.description,
      album.rating,
      genre.name as genre
    FROM album 
    JOIN genre
    ON album.genre_id = genre.id
    WHERE album.id = $1;
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
  [body.name, body.year, body.genreId, body.description, body.rating])
    .then(result => {
      const id = result.rows[0].id;

      return client.query(`
        SELECT
              album.id,
              album.name as name,
              album.year,
              album.description,
              album.rating,
              genre.id as "genreId",
              genre.name as name
        FROM album
        JOIN genre
        ON album.genre_id = genre.id
        WHERE album.id = $1;
        `,
      [id]);
    })
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








const PORT = 3000;
app.listen(PORT, () => {
  console.log('running on', PORT);
});
