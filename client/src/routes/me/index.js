import MeContainer from './containers/MeContainer'
import ensureLoggedIn from '../ensureLoggedIn'

export default store => ({
  path: '/me',
  component: MeContainer,
  onEnter: ensureLoggedIn(store),
})
