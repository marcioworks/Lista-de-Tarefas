const { Router } = require('express')

const routes = new Router()
const authMiddleware = require('./app/middlewares/auth');
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')



routes.post('/users',UserController.store)
routes.get('/users',UserController.index)
routes.post('/session', SessionController.store)

routes.use(authMiddleware);


module.exports = routes