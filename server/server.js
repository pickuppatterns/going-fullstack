const express = require('express');
const app = express();
const fs = require('fs');

console.log('i am the server file');
 


function readData() {
  // we don't normally use sync, but fine for today
  const data = fs.readFileSync('./data/albums.json', 'utf8');
  return JSON.parse(data);
}
//middleware body parser
app.use(express.json());

app.get('/api/albums', (req, res) => {
  const albums = readData();
  res.json(albums);
});
const PORT = 3000;
app.listen(PORT, () => 
{
  console.log('running on', PORT);
});
