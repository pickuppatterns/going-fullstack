const express = require('express');
const app = express();
const fs = require('fs');
const shortid = require('shortid');

console.log('i am the server file');
 


function readData() {
  // don't make this a habbit
  const data = fs.readFileSync('./data/albums.json', 'utf8');
  return JSON.parse(data);
}
function saveData(albums) {
  const json = JSON.stringify(albums, true, 2);
  fs.writeFileSync('./data/albums.json', json);
}

//middleware body parser
app.use(express.json());

app.get('/api/albums', (req, res) => {
  const albums = readData();
  res.json(albums);
});
app.post('api/albums', (req, res) =>{

  const albums = readData();
  const album = req.body;
  albums.id = shortid.generate();
  albums.push(album);
  saveData(albums);
  res.json(album);
});

const PORT = 3000;
app.listen(PORT, () => 
{
  console.log('running on', PORT);
});
