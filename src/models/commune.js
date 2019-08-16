
module.exports = (sequelize, DataTypes) => {
  const Commune = sequelize.define('Commune', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    region_id: DataTypes.UUID,
    deleted_at: DataTypes.DATE,
    state: DataTypes.INTEGER,
  }, {
    tableName: 'communes',
    underscored: true,
    paranoid: true,
  });
  Commune.associate = models => {
    Commune.hasMany(models.Court, {
      foreignKey: 'commune_id',
      onDelete: 'NO ACTION',
    });
    Commune.belongsTo(models.Region, {
      as: 'region',
      foreignKey: 'region_id',
      onDelete: 'NO ACTION',
    });
  };
  return Commune;
};
