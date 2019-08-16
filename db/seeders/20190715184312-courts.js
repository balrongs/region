const courtsSeeds = require('../seeds/courts');

const Models = require('../../src/models');


const { Commune } = Models;
const { Court } = Models;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const response = await courtsSeeds.data.map(async court => {
      const { code } = court;
      const commune = await Commune.findOne({
        where: {
          code,
        },
      });
      await Court.create({
        name: court.name,
        commune_id: commune.id,
      });
    });
    await Promise.all(response);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('courts', null, {});
  },
};
