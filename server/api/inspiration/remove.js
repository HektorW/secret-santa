const { removeInspiration } = require('../../../db/models/User')

module.exports = function* removeInspirationRequest(req) {
  const { user } = req
  const { inspirationId } = req.body
  return yield removeInspiration(user, inspirationId) 
}
