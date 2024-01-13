const ArticleModel = require('@controllers/articles/ArticleModel');
const CategoryModel = require('@controllers/categories/CategoryModel');

const CateControllers = {
  categoryPage(req, res) {
    const { slug } = req.params;

    CategoryModel.findOne({
      where: {slug},
      include: [{model: ArticleModel}]
    })
    .then(category => {
      if(category)

        CategoryModel.findAll().then(categories => {
          res.render('index', {articles: category.articles, categories})
        })
      else 
        res.redirect('/')
    })
    .catch(err => {
      res.redirect('/')
    })
  }
}

module.exports = CateControllers;