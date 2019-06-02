
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
      'UserProduct',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id'
        },
        userId:{
          type: DataTypes.BIGINT,
          allowNull:true,
          references: {
            model: 'bsb_user',
            key: 'id'
          },
          field: 'userId'
        },
        productId:{
          type: DataTypes.BIGINT,
          allowNull:true,
          references: {
            model: 'bsb_product',
            key: 'id'
          },
          field: 'productId'
        },
      },
      {
        timestamps:false,
        tableName: 'bsb_user_product',
        schema: 'public'
      }
    );
  };
  