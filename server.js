const
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

app.use(history())
app.use(serveStatic(path.join(path.resolve(), '/dist/spa-mat')))
app.listen(port)
