const { join } = require('path')
const { static } = require('express')
const { DEVELOPMENT } = require('../../config/env')
const log = require('../../log')('server/client')

module.exports = function createClientRoute() {
  if (DEVELOPMENT) {
    log.info('Redirecting client to dev server')
    return (req, res) => res.redirect('http://localhost:3000')
  }

  log.info('Serving static client files')
  return static(
    join(__dirname, '../../client/build')
  )
}
