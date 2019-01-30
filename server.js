const
  json = require('./src/data.json'),
  express = require('express'),
  path = require('path'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'), // when using vue router history mode
  appPort = process.env.PORT || 80

const app = express()

app.get('/api', function (req, res) {
  for (var key in req.query) {
    if (key in json) {
      if (key === 'mute') {
        json[key] = (req.query[key] === 'true')
      } else if (key === 'master') {
        var master = parseInt(req.query[key])
        if (master >= 0 && master <= 100) {
          json[key] = master
        }
      } else if (key.includes('eq')) {
        var eq = parseInt(req.query[key])
        if (eq >= 0 && eq <= 100) {
          json[key] = eq
        }
      } else if (key.includes('speaker')) {
        var speaker = parseInt(req.query[key])
        if (speaker >= 0 && speaker <= 100) {
          json[key] = speaker
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
      } else if (key === 'fsa') {
        json[key] = (req.query[key] === 'true')
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
