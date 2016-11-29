export default store => ({
  onEnter: (nextState, replace) => {
    const { user } = store.getState()
    if (!user.isLoggedIn) {
      return replace('/login')
    }

    const hasAssigned = !!user.assigned
    if (hasAssigned) {
      return replace('/assigned')
    }

    replace('/me')
  }
})
