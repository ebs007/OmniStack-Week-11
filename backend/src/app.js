const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

/*
GET: Buscar/listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end

Tipo de parâmetros:

Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizando para criar ou alterar recursos

Driver: SELECT * FROM users
Query Builder: table('users).select('*').where()

NPM - Instalar um pacote
NPX - Executar um pacote
*/

module.exports = app
