const express = require('express')
const http = require('http')
const Database = require('./database')
const port = 3000

const database = new Database()
const app = express()
const server = http.createServer(app);

app.set('port', port);

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: './' })
})

app.get('/games/list', function (req, res) {
  res.send(database.games)
})

app.post('/games/list/:game/:price', function (req, res) {
  let title = req.params.game
  let price = req.params.price

  database.add(title, price).then(() => {
    res.send('added')
  })
})

app.delete('/games/list/:id', function (req, res) {
  let gameId = req.params.gameId

  database.delete(gameId).then(() => {
    res.send('deleted')
  })
})

server.listen(port);