const CategoryModel = require('@controllers/categories/CategoryModel');
const ArticleModel = require('@controllers/articles/ArticleModel');
const Slugify = require('slugify');

const Controllers = {
  home(req, res) {
    res.send('Pagina de artigos para o usuario')
  },

}

module.exports = Controllers;