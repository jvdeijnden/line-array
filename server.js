const
  express = require('express'),
  path = require('path'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 8000

const app = express()

app.use(history())
app.use(serveStatic(path.join(path.resolve(), '/dist/spa-mat')))
app.listen(port)
