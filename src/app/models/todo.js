const { Model } = require('sequelize')
const Sequelize = require('sequelize')

class Todo extends Model {
  static init(sequelize) {
    super.init({
      desc: Sequelize.STRING,
      date: Sequelize.DATE,
      done: Sequelize.BOOLEAN
    }, {
      sequelize,
    })
    return this;
  }
}

module.exports = Todo
