const { Sequelize } = require('sequelize');
const dbConfig = require('./config');

console.log(dbConfig.username)
console.log(dbConfig.password)
console.log(dbConfig.database)
console.log(dbConfig.host)
console.log(dbConfig.dialect)

const username = dbConfig.username;
const password = dbConfig.password;
const database = dbConfig.database;
const host = dbConfig.host;
const dialect = dbConfig.dialect;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect
});

module.exports = sequelize;
