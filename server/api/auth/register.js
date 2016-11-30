const { addUser } = require('../../../db/models/user')
const log = require('../../../log')('server/api/auth/register')

module.exports = function* register(req) {
  const { realName, username, password } = req.body
  log.info({ body: req.body }, 'register')
  const user = yield addUser(username, password, realName)

  return new Promise((resolve, reject) => {
    req.logIn(user, loginError => {
      if (loginError) {
        return reject(loginError)
      }
      resolve(user)
    })
  })
}
