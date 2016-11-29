const { Strategy } = require('passport-local')
const { authenticateUser } = require('../../db/models/User')

module.exports = new Strategy((username, password, done) => {
  authenticateUser(username, password).then(
    user => done(null, user),
    error => done(error)
  )
})
