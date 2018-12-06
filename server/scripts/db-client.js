const pg = require('pg');
const DATABASE_URL = 'postgres://localhost:5432/albums';
const Client = pg.Client;
const client = new Client(DATABASE_URL);


//call connect
client.connect()
  .then(() => console.log('You are connected to db', DATABASE_URL))
  .catch(err => console.error('Umm uh-oh there is a connection error', err));
  
client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});
module.exports = client;