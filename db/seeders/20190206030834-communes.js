
const communesSeeds = require('../seeds/communes');

const Models = require('../../src/models');

const Region = Models.Region;
const Commune = Models.Commune;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const response = await communesSeeds.data.map(async commune => {
      const code = commune.code.slice(0, 2);
      const region = await Region.findOne({
        where: {
          code,
        },
      });
      await Commune.create({
        name: commune.name,
        code: commune.code,
        region_id: region.id
      });
    });
    await Promise.all(response);
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('communes', null, {});
  }
};
