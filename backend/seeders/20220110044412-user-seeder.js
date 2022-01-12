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
    queryInterface.bulkInsert('users', [
      {
        name : "user1",
        phoneNumber : 9878765456,
        reportingManager:0
      },
      {
        name : "user2",
        phoneNumber : 9878765456,
        reportingManager:0
      },
      {
        name : "user3",
        phoneNumber : 9878765456,
        reportingManager:0
      },
      {
        name : "user4",
        phoneNumber : 9878765456,
        reportingManager:0
      },
      {
        name : "user5",
        phoneNumber : 9878765456,
        reportingManager:0
      },
      {
        name : "user6",
        phoneNumber : 9878765456,
        reportingManager:0
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('users', null, {});
  }
};
