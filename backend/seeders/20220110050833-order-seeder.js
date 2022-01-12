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
    queryInterface.bulkInsert('orders', [
      {userId:1,productId:1,outletId:1,quantity:3,cost:45,createdAt:new Date(),updatedAt:new Date() },
      {userId:2,productId:2,outletId:2,quantity:3,cost:45,createdAt:new Date(),updatedAt:new Date() },
      {userId:3,productId:3,outletId:3,quantity:3,cost:45,createdAt:new Date(),updatedAt:new Date() },
      {userId:4,productId:4,outletId:4,quantity:3,cost:45,createdAt:new Date(),updatedAt:new Date() },
      {userId:5,productId:5,outletId:5,quantity:3,cost:45,createdAt:new Date(),updatedAt:new Date() },
      {userId:6,productId:6,outletId:6,quantity:3,cost:45,createdAt:new Date(),updatedAt:new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
