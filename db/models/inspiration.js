const db = require('../index')
const log = require('../../log')('db/models/Inspiration')

const tableName = 'inspiration'
const tableColumns = [
  'id INTEGER PRIMARY KEY AUTOINCREMENT',
  'value TEXT',
  'userId INTEGER',
  'FOREIGN KEY(userId) REFERENCES user(id)',
]

exports.setup = function setup() {
  return db.run(`CREATE TABLE IF NOT EXISTS ${tableName} (${tableColumns.join(', ')})`)
    .then(() => log.info({ tableName, tableColumns }, 'set up inspiration table'))
    .catch(error => log.error(error, 'failed to create inspiration table'))
}


exports.getUserInspirations = function getUserInspirations(userId) {
  const query = `SELECT id, value from ${tableName} WHERE userId = ?`
  const values = [userId]
  return db.all(query, values)
}

exports.addInspiration = function addInspiration(userId, value) {
  const columns = ['value', 'userId']
  const values = [value, userId]
  return db.insert(tableName, columns, values)
}

exports.updateInspiration = function updateInspiration(id, value) {
  const query = `UPDATE ${tableName} SET value = ? WHERE id = ?`
  const values = [value, id]
  return db.run(query, values)
}

exports.removeInspiration = function removeInspiration(id) {
  const query = `DELETE FROM ${tableName} WHERE id = ?`
  const values = [id]
  return db.run(query, values)
}