
const fs = require('fs');
const pg = require ('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/albums';
const client = new Client(databaseUrl);

client.connect();

client.query(`
SELECT name, year, description, rating FROM albums;
`)
  .then(
    results => {
      fs.writeFileSync(
        'albums.json',
        JSON.stringify(results.rows, true, 2)
      );
    },
    err => console.log(err)
  )
  .then (() => {
    client.end();
  
  });