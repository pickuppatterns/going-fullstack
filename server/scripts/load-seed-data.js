const client = require('./db-client.js');
const characters = require('../data/characters.json');
const houses = require('./houses.js');

Promise.all(
  houses.map(house => {
    return client.query(`
      INSERT INTO houses (name, short_name)
      VALUES ($1, $2);
    `,
    [house.name, house.shortName]);
  })
)
  .then(() => {
    return Promise.all(
      characters.map(character => {
        return client.query(`
                INSERT INTO characters (name, house, alive, age)
                VALUES ($1, $2, $3, $4);
            `,
        [character.name, character.house, character.alive, character.age]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'), 
    err => console.log(err))
  .then(() => {client.end();
  });