const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');

// Usando view engine .ejs
app.set('view engine', 'ejs');

// Body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// Static
app.use(express.static('public'));

// Rotas
app.get('/', routes)

module.exports = app;