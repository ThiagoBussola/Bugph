const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.id_usuario) return util.bind(new Error('Enter your id_usuario!'))
    if (!body.id_post) return util.bind(new Error('Enter your id_post!'))

    const checkCurtidaExist = await mysql.query('select * from curtidas where id_post=?', [body.id_post])
    
    if (checkCurtidaExist.length) return util.bind(new Error('Não foi possível curtir a publicação'))
    
    const insert = await mysql.query('INSERT INTO curtidas (id_usuario, id_post, datahora) VALUES(?,?,?)', [body.id_usuario, body.id_post, body.datahora]);
    return util.bind(insert)
  } catch (error) {
    return util.bind(error)
  }
}
