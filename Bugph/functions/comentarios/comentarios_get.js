const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    
    if (event.pathParameters && event.pathParameters.id) {
      const posts = await mysql.query('select id, id_usuario, id_post, comentarios, datahora from comentarios where id=?', [event.pathParameters.id])
      return util.bind(posts.length ? posts[0] : {})
    }

    const comentarios = await mysql.query('select id, id_usuario, id_post, comentarios, datahora from comentarios')
    return util.bind(comentarios)
  } catch (error) {
    return util.bind(error)
  }
}
