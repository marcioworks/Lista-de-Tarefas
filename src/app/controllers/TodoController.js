const Todo = require('../models/todo')

class TodoController {
  async index(req, res) {

    const todos = await Todo.findAll();

    return res.json(todos)
  }

  async store(req, res) {
    const { id, desc, date, done } = req.body

    await Todo.create({
      id,
      desc,
      date
    })

    return res.status(201).json({
      id,
      desc,
      date,
      done,
    })
  }

  async update(req, res) {
    const {id} = req.params
   
    await Todo.update({done:true},{
      where:{id}
    })
    const todo = await Todo.findByPk(id)

    return res.json(todo)
  }

  async delete(req, res) {
    const { id } = req.params

    const todo = await Todo.findByPk(id)
    if (!todo) {
      return res.json({ error: 'Tarefa não encontrada.' })
    }

    await Todo.destroy({ where: { id: todo.id } })
    return res.json('Tarefa removida.')
  }
}

module.exports = new TodoController()

