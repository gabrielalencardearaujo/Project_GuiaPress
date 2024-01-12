const Sequelize = require('sequelize');
const config = require('@config');

const connection = new Sequelize('GuiaPress', config.app.user, config.app.password, {
  host: config.app.host,
  dialect: 'mysql',
  timezone: "-03:00"
});

module.exports = connection;