const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.id) return util.bind(new Error('Enter your code!'))

    await mysql.query('update comentarios set comentarios=?, datahora=? where id=?', [body.comentarios, body.datahora])
    return util.bind({})
  } catch (error) {
    return util.bind(error)
  }
}
