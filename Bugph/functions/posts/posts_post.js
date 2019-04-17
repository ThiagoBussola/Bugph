const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.id_usuario) return util.bind(new Error('Enter your id_usuario!'))


    const checkPostExist = await mysql.query('select * from posts where titulo=?', [body.titulo])
    
    if (checkPostExist.length) return util.bind(new Error('Não foi possível localizar o post!'))
    
    const insert = await mysql.query('INSERT INTO posts (id_usuario, titulo, datahora) VALUES(?,?,?,?)', [body.id_usuario, body.titulo, body.imagem, body.datahora]);
    return util.bind(insert)
  } catch (error) {
    return util.bind(error)
  }
}
