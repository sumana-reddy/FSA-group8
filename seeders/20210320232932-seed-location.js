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
    await queryInterface.bulkInsert('Locations', [{
      id: 1,
      name: '1213 Apartments',
      type: 'quad',
      latitude: '40.360857#40.360849#40.360495#40.360521',
      longitude: '-94.888152#-94.887489#-94.887500#-94.888210',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      id: 2,
      name: '5860 McCrimmon Parkway',
      type: 'quad',
      latitude: '35.8416#35.8429#35.8280#35.8216',
      longitude: '-78.852915#-78.853732#-78.855489#-78.858790',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      id: 3,
      name: 'B.D Owens Library',
      type: 'quad',
      latitude: '35.8416#35.8429#35.8280#35.8216',
      longitude: '-78.852915#-78.853732#-78.855489#-78.858790',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    //
    // return queryInterface.bulkDelete('Locations', null, {});
  }
};
