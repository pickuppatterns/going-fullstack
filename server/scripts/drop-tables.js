const client = require('../db-client.js');

client.query(`
    DROP TABLE IF EXISTS characters`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  ).then(() => {
    client.end();
  });