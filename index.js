const server = require('./server')
const config = require('./config')
const log = require('./log')('secret-santa')

log.info({ config }, 'Booting secret-santa')

server.listen(config.port, () => {
  log.info({ port: config.port }, 'Server is listening')
})
