const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/albums';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
        CREATE TABLE IF NOT EXISTS album (
            id SERIAL PRIMARY KEY, 
            name VARCHAR(256) NOT NULL,
            year INT,
            description VARCHAR(256),
            rating INT
        );
        `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
