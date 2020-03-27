const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incedents', IncidentController.index)
routes.post('/incedents', IncidentController.create)
routes.delete('/incedents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes