// import json from './src/data.json'

const
  json = require('./src/data.json'),
  express = require('express'),
  // http = require('http').Server(express),
  // io = require('socket.io')(http),
  path = require('path'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 8000

const app = express()

// io.on('connection', function (socket) {
//   console.log('a user connected')
// })

app.get('/json', function (req, res) {
  res.send(json)
})

app.use(history())
app.use(serveStatic(path.join(path.resolve(), '/dist/spa-mat')))
app.listen(port)
