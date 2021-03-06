'use strict'

require('dotenv').config()
const path = require('path')

const usuarios = require(path.join(__dirname, 'functions', 'usuarios'))

module.exports = {
  usuarios: (event, context) => {
    if (event.resource === '/usuarios' && event.httpMethod === 'GET') return usuarios.get(event, context)
    if (event.resource === '/usuarios' && event.httpMethod === 'POST') return usuarios.post(event, context)
    if (event.resource === '/usuarios' && event.httpMethod === 'PUT') return usuarios.put(event, context)
    if (event.resource === '/usuarios' && event.httpMethod === 'DELETE') return usuarios.remove(event, context)
    if (event.resource === '/usuarios/{id}' && event.httpMethod === 'GET') return usuarios.get(event, context)
  },
  posts: (event, context) => {
    if (event.resource === '/posts' && event.httpMethod === 'GET') return posts.get(event, context)
    if (event.resource === '/posts' && event.httpMethod === 'POST') return posts.post(event, context)
    if (event.resource === '/posts' && event.httpMethod === 'PUT') return posts.put(event, context)
    if (event.resource === '/posts' && event.httpMethod === 'DELETE') return posts.remove(event, context)
    if (event.resource === '/posts/{id}' && event.httpMethod === 'GET') return posts.get(event, context)
  },
  comentarios: (event, context) => {
    if (event.resource === '/comentarios' && event.httpMethod === 'GET') return comentarios.get(event, context)
    if (event.resource === '/comentarios' && event.httpMethod === 'POST') return comentarios.post(event, context)
    if (event.resource === '/comentarios' && event.httpMethod === 'PUT') return comentarios.put(event, context)
    if (event.resource === '/comentarios' && event.httpMethod === 'DELETE') return comentarios.remove(event, context)
    if (event.resource === '/comentarios/{id}' && event.httpMethod === 'GET') return comentarios.get(event, context)
  },
  curtidas: (event, context) => {
    if (event.resource === '/curtidas' && event.httpMethod === 'GET') return curtidas.get(event, context)
    if (event.resource === '/curtidas' && event.httpMethod === 'POST') return curtidas.post(event, context)
    if (event.resource === '/curtidas' && event.httpMethod === 'DELETE') return curtidas.remove(event, context)
    if (event.resource === '/curtidas/{id}' && event.httpMethod === 'GET') return curtidas.get(event, context)
  },
  logs: (event, context) => {
    if (event.resource === '/logs' && event.httpMethod === 'GET') return logs.get(event, context)
    if (event.resource === '/logs' && event.httpMethod === 'POST') return logs.post(event, context)
    if (event.resource === '/logs' && event.httpMethod === 'PUT') return logs.put(event, context)
    if (event.resource === '/logs' && event.httpMethod === 'DELETE') return logs.remove(event, context)
    if (event.resource === '/logs/{id}' && event.httpMethod === 'GET') return logs.get(event, context)
  }
}
