'use strict';
const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs')

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password_hash: Sequelize.STRING
    }, {
      sequelize,
    }

    );
    this.addHook('beforeSave', async (user) => {
      if (user.password_hash) {
        user.password_hash = await bcrypt.hash(user.password_hash, 8)
      }
    });
    return this;
  }
  static associate(models) {
    // define association here
  }

  async checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
};

module.exports = User
