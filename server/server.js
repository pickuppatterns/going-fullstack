//const fs = require('fs');
console.log('i am the server file');
 
const express = require('express');
const app = express();

const fs = require('fs');

function readData() {
  // we don't normally use sync, but fine for today
  const data = fs.readFileSync('./data/collection.json', 'utf8');
  return JSON.parse(data);
}
//middleware body parser
app.use(express.json());

app.get('/api/collection', (req, res) => {
  const albums = readData();
  res.json(albums);
});
const PORT = 3000;
app.listen(PORT, () => 
{
  console.log('server app listens', PORT);
});
