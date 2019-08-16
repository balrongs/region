module.exports = (sequelize, DataTypes) => {
  const Court = sequelize.define('Court', {
    name: DataTypes.STRING,
    commune_id: DataTypes.UUID,
    deleted_at: DataTypes.DATE,
    state: DataTypes.INTEGER,
  }, {
    tableName: 'courts',
    underscored: true,
    paranoid: true,
  });
  Court.associate = models => {
    Court.belongsTo(models.Commune, {
      as: 'commune',
      foreignKey: 'commune_id',
      onDelete: 'NO ACTION',
    });
  };
  return Court;
};
