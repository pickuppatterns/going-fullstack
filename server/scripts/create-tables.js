const client = require('./db-client.js');

client.query(`
        CREATE TABLE IF NOT EXISTS houses (
          id SERIAL PRIMARY KEY,
          name VARCHAR(256) NOT NULL,
          short_name VARCHAR(8) NOT NULL
        );
        CREATE TABLE IF NOT EXISTS characters (
            id SERIAL PRIMARY KEY,
            name VARCHAR(256) NOT NULL,
            house VARCHAR(256) NOT NULL,
            alive BOOLEAN,
            age INTEGER
        );
    `).then(
  () => console.log('create tables complete'),
  err => console.log(err)
).then(() => {
  client.end();
});