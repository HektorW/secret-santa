const { getById } = require('../../db/models/User')

exports.serialize = function serialize(user, done) {
  done(null, user.id)
}

exports.deserialize = function deserialize(userId, done) {
  getById(userId).then(
    user => done(null, user),
    error => done(error)
  )
}
