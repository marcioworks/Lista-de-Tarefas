'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('todos',{
     id:{
       type: Sequelize.INTEGER,
       allowNull:false,
       primaryKey: true,
       autoIncrement: true
     },
     desc:{
       type: Sequelize.STRING,
       allowNull: false,
     },
     date:{
       type:Sequelize.DATE,
       allowNull:false,
     },
     done:{
       type: Sequelize.BOOLEAN,
       allowNull:false,
       defaultValue: false
     },
     created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('todos')
  }
};
