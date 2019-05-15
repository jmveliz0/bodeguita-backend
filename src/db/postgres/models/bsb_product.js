module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
      'product',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id'
        },
        nombre: DataTypes.STRING,
        cantidad: DataTypes.INTEGER,
        precio: DataTypes.DECIMAL,
        tipo: DataTypes.STRING,
        descuento: DataTypes.DECIMAL
      },
      {
        timestamps:false,
        tableName: 'bsb_product',
        schema: 'public'
      }
    );
  };
  