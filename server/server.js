//const fs = require('fs');
console.log('i am the server file');
 
const express = require('express');
const app = express();



const PORT = 3000;
app.listen(PORT, () => 
{
  console.log('server app listens', PORT);
});
