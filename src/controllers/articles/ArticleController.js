const CategoryModel = require('@controllers/categories/CategoryModel');
const ArticleModel = require('@controllers/articles/ArticleModel');
const Slugify = require('slugify');

const Controllers = {
  articlePage(req, res) {
    const {slug} = req.params;

    ArticleModel.findOne({
      where: {slug}
    })
    .then(article => {
      if(article)
        res.render('pages/articlePage', {article});
      else 
        res.render('/')
    })
    .catch(err => {
      console.log('Erro ao tentar acessar esse artigo.');
      res.redirect('/');
    })
  },

}

module.exports = Controllers;