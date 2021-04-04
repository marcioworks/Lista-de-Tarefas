const User = require('../models/user')


class UserController {
  async index(req,res){
    const users = await User.findAll();

    return res.json(users)
  }


  async store(req, res) {

    const userExists = await User.findOne({ where: { email: req.body.email } })

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já está Cadastrado' })
    }

    const { id, name, email, password } = req.body

    await User.create({
      id,
      name,
      email,
      password_hash: password
    })

    return res.json({
      id,
      name,
      email
    })
  }
}

module.exports = new UserController()