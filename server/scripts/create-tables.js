const client = require('../db-client');

client.query(`
CREATE TABLE IF NOT EXISTS genre (
  id SERIAL PRIMARY KEY,
  name VARCHAR(256) NOT NULL,
  short_name VARCHAR(8) NOT NULL
);  
CREATE TABLE IF NOT EXISTS album (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(256) NOT NULL,
    year INTEGER,
    description VARCHAR(256),
    genre_id INTEGER NOT NULL REFERENCES genre(id),
    rating BOOLEAN
    );
  `)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
 