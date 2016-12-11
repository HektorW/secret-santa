import AssignedContainer from './containers/AssignedContainer'

export default store => ({
  path: '/assigned',
  component: AssignedContainer,
  onEnter: (nextState, replace) => {
    const { user } = store.getState()
    if (!user.isLoggedIn) {
      return replace('/login')
    }
    
    if (!user.assigned) {
      return replace('/me')
    }
  },
})
