const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.name) return util.bind(new Error('Enter your name!'))
    if (!body.email) return util.bind(new Error('Enter your email!'))
    if (!body.senha) return util.bind(new Error('Enter your senha!'))
    if (!body.ultimo_login) return util.bind(new Error('Enter your ultimo_login!'))
    if (!body.datahora) return util.bind(new Error('Enter your datahora!'))
    if (!body.token) return util.bind(new Error('Enter your token!'))

    const checkUserExist = await mysql.query('select * from usuarios where email=?', [body.email])
    
    if (checkUserExist.length) return util.bind(new Error('An account with this email already exists!'))
    
    const insert = await mysql.query('INSERT INTO usuarios (nome, email, senha, ultimo_login, datahora, token) VALUES(?,?,?,?,?,?,)', [body.nome, body.email, body.senha, body.ultimo_login, body.data_hora, body.data_hora]);
    return util.bind(insert)
  } catch (error) {
    return util.bind(error)
  }
}
