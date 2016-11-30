const { env } = process
const { getBool } = require('./parse')

module.exports = {
  forceSsl: getBool(env.FORCE_SSL, false),
  port: env.PORT || 3001,
  sessionSecret: env.SESSION_SECRET || 'abcd1234',
}
