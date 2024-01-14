const express = require('express');
const app = express();
const routes = require('./routes');
const session = require('express-session');
const bodyParser = require('body-parser');
const connection = require('@database/database');

const ArticleModel = require('./controllers/articles/ArticleModel.js')
const CategoryModel = require('./controllers/categories/CategoryModel.js')

// Use view engine .ejs 
app.set('view engine', 'ejs');

// Session config
app.use(session({
  secret: 'qualquercoisa',
  cookie: {
    maxAge: 30000
  }
}))

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