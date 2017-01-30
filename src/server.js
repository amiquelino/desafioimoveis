const express = require('express')
const app = express()
const values = require('../api/valores.json')

app.use( (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
  next();
})

app.get('/api/values', (req, res, next) => {
  res.json(values)
});

app.listen(3001, () => {
  console.log('desafioimoveis api listening on port 3001!');
});
