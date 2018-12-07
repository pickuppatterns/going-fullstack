const client = require('../db-client'); 
const albums = require('../data/albums.json');

Promise.all(
  albums.map(album => {
    return client.query(`
            INSERT INTO album (name, year, description, rating)
            VALUES ($1, $2, $3, $4);
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