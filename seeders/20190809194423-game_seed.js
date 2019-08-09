'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Games', [{
      title: 'Fix it Felix Jr.',
      price: 50,
      releaseYear: 1982,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ms. Pac Man',
      price: 100,
      releaseYear: 1981,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Dig Dug',
      price: 75,
      releaseYear: 1982,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Galaga',
      price: 125,
      releaseYear: 1981,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Games', null, {})
  }
};
