const CategoryModel = require('@controllers/categories/CategoryModel');
const ArticleModel = require('@controllers/articles/ArticleModel');
const Slugify = require('slugify');

const Controllers = {
  home(req, res) {
    ArticleModel.findAll({
      include: [{model: CategoryModel}] // Incluindo os dados da tabela categorias (equivalente ao uso do JOIN)
    }).then(articles => {
      res.render('admin/articles/index', {articles})
    })
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
  },

  delete(req, res) {
    const { id } = req.body;

    if (id && !isNaN(id)) {
      //Deletar o artigo no banco de dados que possua o mesmo id da variavel id:
      ArticleModel.destroy({
        where: {
          id: id
        }
      }).then(() => {
        res.redirect('/admin/articles')
      })

    } else {
      res.redirect('/admin/articles')
    }
  },
}

module.exports = Controllers;