const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('demo1', 'postgres', 'Abish@postgres123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = { sequelize };
