const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.id_usuario) return util.bind(new Error('Enter your id_usuario!'))

    const checkLogsExist = await mysql.query('select * from logs where id=?', [body.id])
    
    if (checkLogsExist.length) return util.bind(new Error('An account with this email already exists!'))
    
    const insert = await mysql.query('INSERT INTO logs (id_usuario, log, datahora) VALUES(?,?,?)', [body.id_usuario, body.log, body.datahora]);
    return util.bind(insert)
  } catch (error) {
    return util.bind(error)
  }
}
