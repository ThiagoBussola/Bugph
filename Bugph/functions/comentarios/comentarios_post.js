const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.id_usuario) return util.bind(new Error('Enter your id_usuario!'))
    if (!body.id_post) return util.bind(new Error('Enter your id_post!'))

    const checkComantarioExist = await mysql.query('select * from comentarios where id_post=?', [body.id_post])
    
    if (checkComantarioExist.length) return util.bind(new Error('Não foi possível comentar na publicação!'))
    
    const insert = await mysql.query('INSERT INTO comentarios (id_usuario, id_post, comentario, datahora) VALUES(?,?,?,?)', [body.id_usuario, body.id_post, body.comentario, body.datahora]);
    return util.bind(insert)
  } catch (error) {
    return util.bind(error)
  }
}
