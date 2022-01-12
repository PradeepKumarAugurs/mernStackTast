'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addConstraint('orders',{
      fields : ['userId'],
      type : 'foreign key',
      name : 'order_user_association',
      references:{
        table : 'users',
        field: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeConstraint('orders',{
      fields : ['userId'],
      type : 'foreign key',
      name : 'order_user_association',
      references:{
        table : 'users',
        field: 'id'
      }
    });
  }
};
