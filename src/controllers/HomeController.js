const ArticleModel = require('@controllers/articles/ArticleModel');

const HomeController = {
  home(req, res) {
    ArticleModel.findAll()
      .then(articles => {
        res.render('index', { articles })

      })
  }
}

module.exports = HomeController;