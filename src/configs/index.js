require('dotenv').config();

module.exports = {
  app: {
    port: process.env.PORT_SERVER || 8080,
    password: process.env.PASSWORD_DB,
    user: process.env.USER_DB,
    host: process.env.HOST
  }
}