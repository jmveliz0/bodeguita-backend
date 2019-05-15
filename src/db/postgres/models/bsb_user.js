/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
      },
      codigo: DataTypes.STRING,
      clave: DataTypes.STRING
    },
    {
      timestamps:false,
      tableName: 'bsb_user',
      schema: 'public'
    }
  );
};
