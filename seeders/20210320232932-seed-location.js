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
      latitude: '40.36085#40.36084#40.36049#40.36052',
      longitude: '-94.88815#-94.88748#-94.88750#-94.88821',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      id: 2,
      name: '5860 McCrimmon Parkway',
      type: 'quad',
      latitude: '35.84162#35.84290#35.82800#35.82161',
      longitude: '-78.85291#-78.85373#-78.85548#-78.85879',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      id: 3,
      name: 'B.D Owens Library',
      type: 'quad',
      latitude: '40.35376#40.35375#40.35338#40.35339',
      longitude: '-94.88655#-94.88554#-94.88633#-94.88569',
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
