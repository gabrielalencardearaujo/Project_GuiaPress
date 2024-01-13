const CategoryModel = require('@controllers/categories/CategoryModel');
const ArticleModel = require('@controllers/articles/ArticleModel');
const Slugify = require('slugify');

const Controllers = {
  home(req, res) {
    ArticleModel.findAll({
      include: [{ model: CategoryModel }] // Incluindo os dados da tabela categorias (equivalente ao uso do JOIN)
    }).then(articles => {
      res.render('admin/articles/index', { articles })
    })
  },

  new(req, res) {
    CategoryModel.findAll().then(categories => {
      res.render('admin/articles/new', { categories, updateArticle: null })
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
        res.redirect('/admin/articles/new', { updateArticle: null });
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

  update(req, res) {
    const { id } = req.params;

    ArticleModel.findOne({
      where: { id },
      include: [{ model: CategoryModel }]
    }).then(article => {
      if (article)

        CategoryModel.findAll()
          .then(categories => {
            res.render('admin/articles/new', { updateArticle: article, categories })
          }).catch(err => {
            console.log('Erro ao acessar as categorias no banco de dados', err)
            res.redirect('/admin/articles/new')
          })
    })
  },

  updateArticle(req, res) {
    const {idArticle, title, categoryID, body } = req.body;

    ArticleModel.update({
      title,
      slug: Slugify(title, { lower: true }),
      categoriaId: categoryID,
      body,
    }, {
      where: {
      id: idArticle
    }})
    .then(() => {
      CategoryModel.findByPk(categoryID)
      .then(category => {
        res.redirect(`/category/${category.slug}`)
      })
      .catch(err => {
        console.error('Ocorreu um erro ao redirecionar a pagina', err)
      })
    })
    .catch(err => {
      console.error('Ocorreu um erro ao atualizar o artigo, tente novamente mais tarde.', err)
      res.redirect('/')
    })
  }
}

module.exports = Controllers;