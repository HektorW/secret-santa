import login from './login'
import me from './me'
import register from './register'
import root from './root'

export default store => ({
  path: '/',
  indexRoute: root(store),
  childRoutes: [
    login(store),
    me(store),
    register(store),
  ],
})
