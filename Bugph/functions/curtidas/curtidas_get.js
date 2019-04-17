const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    
    if (event.pathParameters && event.pathParameters.id) {
      const posts = await mysql.query('select id, id_usuario, id_post, datahora from curtidas where id=?', [event.pathParameters.id])
      return util.bind(posts.length ? posts[0] : {})
    }

    const curtidas = await mysql.query('select id, id_usuario, id_post, datahora from curtidas')
    return util.bind(curtidas)
  } catch (error) {
    return util.bind(error)
  }
}
