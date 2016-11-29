const express = require('express')

const app = express()

app.use(require('cookie-parser')())
app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('./utils/session'))

require('./passport')(app)

app.use('/api', require('./api')())
app.use(require('./client')())

module.exports = app
