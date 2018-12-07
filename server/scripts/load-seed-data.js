const client = require('../db-client'); 
const albums = require('../data/albums.json');

Promise.all(
  albums.map(album => {
    return client.query(`
            INSERT INTO album (name, year, description, genre, rating)
            SELECT
            $1 as name
            $2 as year
            $3 as description
            id as genre
            $5 as rating
            FROM genre
            WHERE short_name = $4;
            `,
    [album.name, album.year, album.description, album.genre, album.rating]);
  })
)
  .then(
    () => console.log('seed data load complete'),
    err =>console.log(err)
  )
  .then(() => {
    client.end();
  });