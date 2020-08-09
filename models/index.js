const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';

// eslint-disable-next-line import/no-dynamic-require
const dbConfig = require(path.join(__dirname, '..', 'config', 'db.js'));
const config = dbConfig[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
