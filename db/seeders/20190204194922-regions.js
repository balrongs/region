
const regionsSeeds = require('../seeds/regions');

const Models = require('../../src/models');

const Region = Models.Region;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const response = await regionsSeeds.data.map(async region => {
      await Region.create({
        name: region.name,
        code: region.code,
      });
    });
    await Promise.all(response);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('regions', null, {});
  }
};
