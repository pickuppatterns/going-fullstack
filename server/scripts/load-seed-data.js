const client = require('../db-client'); 
const albums = require('../data/albums.json');
console.log('loading', albums);
Promise.all(
  albums.map(album => {
    return client.query(`
            INSERT INTO album (name, year, description, rating)
            SELECT
            $1 as name,
            $2 as year,
            $3 as description,
            $4 as rating
            `,
    [album.name, album.year, album.description, album.rating]);
  })
)
  .then(
    () => console.log('seed data load complete'),
    err =>console.log(err)
  )
  .then(() => {
    client.end();
  });