const CategoryModel = require('../categories/CategoryModel');
const Slugify = require('slugify');

const AdminController = {
  newCategory(req, res) {
    res.render('admin/categories/new.ejs', { category: null })
  },

  save(req, res) {
    const title = req.body.title;
    if (title) {

      CategoryModel.create({
        title,
        slug: Slugify(title, { lower: true })
      }).then(() => {
        res.redirect('/admin/categories/')
      })
    } else {
      res.redirect('/admin/categories/new.ejs')

    }
  },

  categories(req, res) {
    CategoryModel.findAll().then(categories => {
      res.render('admin/categories/index', {
        categories,
      })
    })
  },

  delete(req, res) {
    const { id } = req.body;

    if (id && !isNaN(id)) {
      //Deletar info no banco de dados que possua o mesmo id da variavel id:
      CategoryModel.destroy({
        where: {
          id: id
        }
      }).then(() => {
        res.redirect('/admin/categories/')
      })

    } else {
      res.redirect('/admin/categories/')
    }
  },

  update(req, res) {
    if (req.body.id) {
      const { id, title } = req.body;

      //Atualiza uma informacao no banco de dados:
      CategoryModel.update({ title, slug: Slugify(title, { lower: true }) }, {
        where: {
          id,
        }
      })
        .then(() => res.redirect('/admin/categories'))
        .catch(err => res.redirect('/admin/categories'))

    } else {

      const { id } = req.params;

      if (isNaN(id)) res.redirect('/admin/categories/');

      CategoryModel.findByPk(id)
        .then(category => {
          if (category) {
            res.render('admin/categories/new', { category: category })
          } else {
            res.redirect('/admin/categories/')
          }
        })
        .catch(err => {
          console.log('Ocorreu um erro ao buscar o id:', err)
        })
    }
  }
}

module.exports = AdminController;