const client = require('../db-client.js');
const characters = require('../data/characters.json');

Promise.all(
  characters.map(character => {
    return client.query(`
            INSERT INTO characters (name, fandom, cool, age)
            VALUES ($1, $2, $3, $4);
        `,
    [character.name, character.fandom, character.cool, character.age]);
  }))
  .then(
    () => console.log('seed data load complete'), 
    err => console.log(err))
  .then(() => {client.end();
  });