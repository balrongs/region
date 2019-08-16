
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    deleted_at: DataTypes.DATE,
    state: DataTypes.INTEGER,
  }, {
    tableName: 'regions',
    underscored: true,
    paranoid: true,
  });
  Region.associate = models => {
    Region.hasMany(models.Commune, {
      foreignKey: 'region_id',
      onDelete: 'NO ACTION',
    });
  };
  return Region;
};
