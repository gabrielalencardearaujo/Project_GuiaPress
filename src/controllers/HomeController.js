const ArticleModel = require('@controllers/articles/ArticleModel');
const CategoryModel = require('@controllers/categories/CategoryModel');

const HomeController = {
  home(req, res) {
    ArticleModel.findAll({
      order: [['id', 'DESC']]
    })
      .then(articles => {
        CategoryModel.findAll().then((categories) => {
          res.render('index', { articles, categories })
        })
      })
  }
}

module.exports = HomeController;