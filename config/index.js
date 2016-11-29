const { env } = process

module.exports = {
  port: env.PORT || 3001,
  sessionSecret: env.SESSION_SECRET || 'abcd1234',
}
