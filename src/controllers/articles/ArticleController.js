const CategoryModel = require('@controllers/categories/CategoryModel');
const ArticleModel = require('@controllers/articles/ArticleModel');
const Slugify = require('slugify');

const Controllers = {
  home(req, res) {
    res.send('Pagina de articles.')
  },

  new(req, res) {
    CategoryModel.findAll().then(categories => {
      res.render('admin/articles/new', { categories })

    })
  },

  save(req, res) {
    const { title, body, categoryID } = req.body;

    ArticleModel.create({
      title,
      slug: Slugify(title, { lower: true }),
      body,
      categoriaId: categoryID,
    })
    .then(() => {
      res.redirect('/admin/articles')
    })
    .catch(err => {
      alert('Erro ao tentar criar o artigo.')
      res.redirect('/admin/articles/new');
    })
  }
}

module.exports = Controllers;