exports.getBool = function getBool(value, defaultValue = false) {
  if (typeof value !== 'string') {
    return defaultValue
  }

  switch (value.toLowercase()) {
    case 'false': return false
    case 'true': return true
    default: return defaultValue
  }
}
