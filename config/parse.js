exports.getBool = function getBool(value, defaultValue = false) {
  if (typeof value !== 'string') {
    return defaultValue
  }

<<<<<<< HEAD
  switch (value.toLowerCase()) {
=======
  switch (value.toLowercase()) {
>>>>>>> 077201c57eea7ce49030cd1d520d6dfd0124a381
    case 'false': return false
    case 'true': return true
    default: return defaultValue
  }
}
