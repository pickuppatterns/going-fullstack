const client = require('../db-client.js');

client.query(`
        CREATE TABLE IF NOT EXISTS characters (
            id SERIAL PRIMARY KEY,
            name VARCHAR(256) NOT NULL,
            fandom VARCHAR(256) NOT NULL,
            cool BOOLEAN,
            age INTEGER
        )
    `).then(
  () => console.log('create tables complete'),
  err => console.log(err)
).then(() => {
  client.end();
});