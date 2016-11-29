const { updateInspiration } = require('../../../db/models/User')

module.exports = function* updateInspirationRequest(req) {
  const { user } = req
  const { inspirationId } = req.body
  return yield updateInspiration(user, inspirationId) 
}
