import Sequelize from 'sequelize';

import UserModel from './models/bsb_user';
import ProductModel from './models/bsb_product';

const sequelize = new Sequelize(process.env.DB_POSTGRES, process.env.USERNAME_POSTGRES, process.env.PASSWORD_POSTGRES, {
  host: process.env.HOST_POSTGRES,
  port: process.env.PORT_POSTGRES,
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
})

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);

module.exports = {
  User,
  Product,
}