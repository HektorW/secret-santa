const { createHash } = require('crypto')
const db = require('../index')
const { getUserInspirations } = require('./inspiration')
const log = require('../../log')('db/models/User')

const tableName = exports.tableName = 'user'
const tableColumns = [
  'id INTEGER PRIMARY KEY AUTOINCREMENT',
  'username TEXT',
  'password TEXT',
  'realName TEXT',
]

exports.setup = function setup() {
  return db.run(`CREATE TABLE IF NOT EXISTS ${tableName} (${tableColumns.join(', ')})`)
    .then(() => log.info({ tableName, tableColumns }, 'set up user table'))
    .catch(error => log.error(error, 'failed to create user table'))
}


exports.addUser = function(username, password, realName) {
  const columns = ['username', 'password', 'realName']
  const values = [username.toLowerCase(), getMd5(password), realName]
  return getByUsername(username)
    .then(existingUser => {
      if (existingUser) {
        throw new Error('A user already exists')
      }
    })
    .then(() => db.insert(tableName, columns, values))
    .then(id => exports.getById(id))
}

exports.authenticateUser = function(username, password) {
  const query = `SELECT id FROM ${tableName} WHERE username = ? AND password = ?`
  const values = [username.toLowerCase(), getMd5(password)]
  return db.get(query, values)
    .then(user => {
      if (!user) {
        return null
      }
      return exports.getById(user.id)
    })
}

exports.getById = function(id) {
  const query = `SELECT id, username, realName FROM ${tableName} WHERE id = ?`
  const values = [id]
  return db.get(query, values)
    .then(user => getUserInspirations(id)
      .then(inspirations => Object.assign({ inspirations }, user))
    )
}


function getByUsername(username) {
  const query = `SELECT username FROM ${tableName} WHERE username = ?`
  const values = [username]
  return db.get(query, values)
}

function getMd5(value) {
  return createHash('md5').update(value).digest('hex')
}
