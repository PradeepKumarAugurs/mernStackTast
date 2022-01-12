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
    queryInterface.bulkInsert('outlets', [
      { name : 'outlet1', phone : 4598765456,address:'LKO',createdAt:new Date(),updatedAt:new Date() },
      { name : 'outlet2', phone : 4598765456,address:'LKO',createdAt:new Date(),updatedAt:new Date() },
      { name : 'outlet3', phone : 4598765456,address:'LKO',createdAt:new Date(),updatedAt:new Date() },
      { name : 'outlet4', phone : 4598765456,address:'LKO',createdAt:new Date(),updatedAt:new Date() },
      { name : 'outlet5', phone : 4598765456,address:'LKO',createdAt:new Date(),updatedAt:new Date() },
      { name : 'outlet6', phone : 4598765456,address:'LKO',createdAt:new Date(),updatedAt:new Date() },
      { name : 'outlet7', phone : 4598765456,address:'LKO',createdAt:new Date(),updatedAt:new Date() }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('outlets', null, {});
  }
};
