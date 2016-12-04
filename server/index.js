const express = require('express')
const { forceSsl } = require('../config')
const { PRODUCTION } = require('../config/env')

const app = express()

if (forceSsl) {
  app.use(require('./middleware/forceSsl'))
}

app.disable('x-powered-by')

app.use(require('cookie-parser')())
app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('./utils/session'))

require('./passport')(app)

if (PRODUCTION) {
  app.use(require('compression')())
}

app.use('/api', require('./api')())
app.use(require('./client')())

module.exports = app
