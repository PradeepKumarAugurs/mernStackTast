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
      fields : ['productId'],
      type : 'foreign key',
      name : 'order_product_association',
      references:{
        table : 'products',
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
      fields : ['productId'],
      type : 'foreign key',
      name : 'order_product_association',
      references:{
        table : 'products',
        field: 'id'
      }
    });
  }
};
