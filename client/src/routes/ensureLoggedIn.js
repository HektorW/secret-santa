export default store => (nextState, replace) => {
  const { user } = store.getState()
  if (!user.isLoggedIn) {
    return replace('/login')
  }
}
