const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test_to_do_list', 'root', 'D3k0@k4Tch4n', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
