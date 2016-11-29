const users = {}

exports.addUser = function(realName, username, password) {
  const id = Object.keys(users).length
  const inspirations = [] 
  const user = { id, inspirations, realName, username, password }
  users[id] = user
  return Promise.resolve(user)
}

exports.authenticateUser = function(username, password) {
  const user = Object.keys(users)
    .map(id => users[id])
    .find(user => (
      user.username === username &&
      user.password === password
    ))
  return Promise.resolve(user || null)
}

exports.getById = function(id) {
  return Promise.resolve(users[id] || null)
}

exports.addInspiration = function(user, inspiration) {
  user.inspirations.push(inspiration)
  return Promise.resolve(user)
}

exports.removeInspiration = function(user, inspirationId) {
  user.inspirations.splice(inspirationId, 1)
  return Promise.resolve(user)
}

exports.updateInspiration = function(user, inspirationId, updatedInspiration) {
  user.inspirations[inspirationId] = updatedInspiration
  return Promise.resolve(user)
}
