const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    
    if (event.pathParameters && event.pathParameters.id) {
      const posts = await mysql.query('select id, id_usuario titulo, imagem, datahora from posts where id=?', [event.pathParameters.id])
      return util.bind(posts.length ? posts[0] : {})
    }

    const posts = await mysql.query('select id, id_usuario, titulo, imagem, datahora from posts')
    return util.bind(posts)
  } catch (error) {
    return util.bind(error)
  }
}
