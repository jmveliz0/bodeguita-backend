module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
      'Product',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id'
        },
        categoryId:{
          type: DataTypes.BIGINT,
          allowNull:true,
          references: {
            model: 'bsb_category',
            key: 'id'
          },
          field: 'categoryId'
        },
        name: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
        discount: DataTypes.DECIMAL
      },
      {
        timestamps:false,
        tableName: 'bsb_product',
        schema: 'public'
      }
    );
  };
  