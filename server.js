require('dotenv').config();
require('module-alias/register')
const config = require('@config');
const app = require('@app');
const connection = require('@database/database');


app.listen(config.app.port, (err) => {
  if (err) {
    console.error('Ocorreu um erro: ', err)
  }
  console.log('Server running on port http://localhost:' + config.app.port)
})