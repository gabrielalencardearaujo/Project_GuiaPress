const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const connection = require('@database/database');

// Use view engine .ejs 
app.set('view engine', 'ejs');

// Body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// Static
app.use(express.static('public'));

// Set file for routers
app.use(routes)

//Data Base
connection.authenticate()
  .then(() => {
    console.log('Conexao com banco de dados estabelecida. estabelecida.')
  })
  .catch(err => {
    console.error('Ocorreu um erro com a conexao com Banco de Dados.')
  })

module.exports = app;