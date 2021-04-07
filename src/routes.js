const { Router } = require('express')

const routes = new Router()
const authMiddleware = require('./app/middlewares/auth');
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const TodoController = require('./app/controllers/TodoController')



routes.post('/users',UserController.store)
routes.get('/users',UserController.index)
routes.post('/session', SessionController.store)

routes.use(authMiddleware);
routes.post('/todo', TodoController.store)
routes.get('/todo', TodoController.index)
routes.delete('/todo/:id', TodoController.delete)
routes.put('/todo/:id', TodoController.update)



module.exports = routes