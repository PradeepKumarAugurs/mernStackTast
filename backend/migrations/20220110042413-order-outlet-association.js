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
      fields : ['outletId'],
      type : 'foreign key',
      name : 'order_outlet_association',
      references:{
        table : 'outlets',
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
      fields : ['outletId'],
      type : 'foreign key',
      name : 'order_outlet_association',
      references:{
        table : 'outlets',
        field: 'id'
      }
    });
  }
};
