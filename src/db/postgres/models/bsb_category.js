module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
      'Category',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id'
        },
        name: DataTypes.STRING
      },
      {
        timestamps:false,
        tableName: 'bsb_category',
        schema: 'public'
      }
    );
  };
  