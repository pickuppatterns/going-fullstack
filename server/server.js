const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');
const pg = require('pg');


function readData() {
  const data = fs.readFileSync('./data/characters.json', 'utf8');
  return JSON.parse(data);
}

function saveData(characters) {
  const json = JSON.stringify(characters, true, 2);
  fs.writeFileSync('./data/characters.json', json);
}

app.use(morgan('dev'));
app.use(express.json());

const dbUrl = 'postgres://localhost:5432/characters';
const Client = pg.Client;
const client = new Client(dbUrl);
client.connect();

app.get('/api/characters', (req, res) => {
  const characters = readData();
  client.query(`
    SELECT name, id FROM characters;`)
    .then(result => {
      res.json(result.rows);
    });
});

app.post('/api/characters', (req, res) => {
  const characters = readData();
  const character = req.body;
  // character.id = shortid.generate();
  characters.push(req.body);
  saveData(characters);
  res.json(character);
});

// this should go at the bottom //
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});