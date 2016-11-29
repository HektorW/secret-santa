const { Router } = require('express')

const routes = {
  '/auth': require('./auth'),
  '/inspiration': require('./inspiration')
}

module.exports = function createApiRoute() {
  const router = Router()

  Object.keys(routes).forEach(routeName => {
    const routeHandler = routes[routeName]
    router.use(routeName, routeHandler())
  })

  return router
}
