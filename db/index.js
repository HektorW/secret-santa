const { join } = require('path')
const db = require('sqlite')

const dbFile = join(__dirname, 'users.sqlite3')

exports.getDB = function() {
  return db.open(dbFile)
}
