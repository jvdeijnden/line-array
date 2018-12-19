const
  json = require('./src/data.json'),
  express = require('express'),
  path = require('path'),
  serveStatic = require('serve-static'),
  // proxy = require('http-proxy-middleware'),
  history = require('connect-history-api-fallback'), // when using vue router history mode
  appPort = 80,
  apiPort = 8080

const
  app = express(),
  api = express()
  // http = require('http').Server(api),
  // io = require('socket.io')(http)

// io.set('origins', '*domain.com*:*')

api.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.header('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next()
})

// io.on('connection', function (socket, next) {
//   console.log('a user connected')
//   socket.emit('data', json)
// })

api.get('/api', function (req, res, next) {
  for (var key in req.query) {
    if (key in json) {
      json[key] = req.query[key]
      console.log(key + ': ' + json[key])
    } else {
      console.error("key doesn't exist")
    }
  }
  res.send(json)
})

// app.use('/api', proxy({
//   target: 'localhost:' + apiPort + '/api',
//   pathRewrite: {'^/api': ''}
// }))

api.use(history())
api.listen(apiPort)

app.use(history())
app.use(serveStatic(path.join(path.resolve(), '/dist/pwa-mat')))
app.listen(appPort)
