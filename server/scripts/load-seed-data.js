const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/albums';
const albums = require('./albums.json');

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return Promise.all(
      albums.map(album => {
        return client.query(`
            INSERT INTO albums (name, year, description, rating)
            VALUES ($1, $2, $3, $4);
            `,
        [album.name, album.year, album.description, album.rating]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err =>console.log(err)
  )
  .then(() => {
    client.end();
  });