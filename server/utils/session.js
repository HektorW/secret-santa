const { sessionSecret } = require('../../config')

module.exports = require('express-session')({
  secret: sessionSecret,
  resave: true,
  saveUninitialized: true,
})
