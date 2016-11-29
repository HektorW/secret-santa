const { addInspiration } = require('../../../db/models/User')

module.exports = function* addInspirationRequest(req) {
  const { user } = req
  const { inspiration } = req.body
  return yield addInspiration(user, inspiration) 
}
