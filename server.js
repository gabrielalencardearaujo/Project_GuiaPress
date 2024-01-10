require('dotenv').config();
require('module-alias/register')
const config = require('@config');
const app = require('@app');
const connection = require('@database/database');

//Data Base
connection.authenticate()
  .then(() => {
    console.log('Conexao com banco de dados estabelecida. estabelecida.')
  })
  .catch(err => {
    console.error('Ocorreu um erro com a conexao com Banco de Dados.')
  })

app.listen(config.app.port, (err) => {
  if (err) {
    console.error('Ocorreu um erro: ', err)
  }
  console.log('Server running on port http://localhost:' + config.app.port)
})