const Sequelize = require('sequelize')
const User = require('../app/models/user')
const Todo = require('../app/models/todo')
const DbConfig = require('../config/database')


const models = [User,Todo]

class Database {
  constructor(){
    this.init()
  }

  init(){
    this.connection = new Sequelize(DbConfig)
    models.map(model => model.init(this.connection))
  }
}

module.exports = new Database()