const
  json = require('./src/data.json'),
  express = require('express'),
  path = require('path'),
  serveStatic = require('serve-static'),
  // proxy = require('http-proxy-middleware'),
  history = require('connect-history-api-fallback'), // when using vue router history mode
  appPort = process.env.PORT || 80

const app = express()
// http = require('http').Server(api),
// io = require('socket.io')(http)

// io.set('origins', '*domain.com*:*')

// api.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.header('Access-Control-Allow-Origin', '*')

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET')

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true)

//   // Pass to next layer of middleware
//   next()
// })

// io.on('connection', function (socket, next) {
//   console.log('a user connected')
//   socket.emit('data', json)
// })

app.get('/api', function (req, res) {
  for (var key in req.query) {
    if (key in json) {
      if (key === 'power') {
        json[key] = (req.query[key] === 'true')
      } else if (key === 'volume') {
        var volume = parseInt(req.query[key])
        if (volume >= 0 && volume <= 100) {
          json[key] = volume
        }
      } else if (key.includes('eq')) {
        var eq = parseInt(req.query[key])
        if (eq >= 0 && eq <= 100) {
          json[key] = eq
        }
      } else if (key === 'angle') {
        var angle = parseInt(req.query[key])
        if (angle >= 0 && angle <= 100) {
          json[key] = angle
        }
      } else if (key === 'distance') {
        var distance = parseInt(req.query[key])
        if (distance >= 0 && distance <= 100) {
          json[key] = distance
        }
      }

      console.log(key + ':  ' + json[key])
    } else {
      console.error("key doesn't exist")
    }
  }
  res.send(json)
})

app.use(history())
app.use(serveStatic(path.join(path.resolve(), '/dist/pwa-mat')))
app.listen(appPort)
