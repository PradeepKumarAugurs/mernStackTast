'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    queryInterface.bulkInsert('products', [
        { name : 'product1', cost : 45 ,createdAt:new Date(),updatedAt:new Date()},
        { name : 'product2', cost : 11 ,createdAt:new Date(),updatedAt:new Date()},
        { name : 'product3', cost : 45 ,createdAt:new Date(),updatedAt:new Date()},
        { name : 'product4', cost : 87 ,createdAt:new Date(),updatedAt:new Date()},
        { name : 'product5', cost : 4 ,createdAt:new Date(),updatedAt:new Date()},
        { name : 'product6', cost : 45 ,createdAt:new Date(),updatedAt:new Date()},
        { name : 'product7', cost : 87 ,createdAt:new Date(),updatedAt:new Date()}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('products', null, {});
  }
};
