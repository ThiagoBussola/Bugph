const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.id) return util.bind(new Error('Enter your code!'))
    if (!body.datahora) return util.bind(new Error('Enter datahora!'))

    await mysql.query('update logs set logs=?, datahora=? where id=?', [body.logs, body.datahora])
    return util.bind({})
  } catch (error) {
    return util.bind(error)
  }
}
