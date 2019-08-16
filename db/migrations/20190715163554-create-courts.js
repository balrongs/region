
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('courts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      commune_id: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: 'NO ACTION',
        references: {
          model: 'communes',
          key: 'id'
        }
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      state: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('courts');
  }
};
