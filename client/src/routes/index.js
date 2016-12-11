import admin from './admin'
import assigned from './assigned'
import login from './login'
import me from './me'
import root from './root'

export default store => ({
  path: '/',
  indexRoute: root(store),
  childRoutes: [
    admin(store),
    assigned(store),
    login(store),
    me(store),
  ],
})
