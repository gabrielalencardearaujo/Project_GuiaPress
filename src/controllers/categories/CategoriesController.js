const CategoryModel = require('./CategoryModel');
const Slugify = require('slugify');

const CateControllers = {
  home(req, res) {
    res.send('Pagina de categorias.')
  },

  newCategory(req, res) {
    res.render('admin/categories/new.ejs')
  },

  save(req, res) {
    const title = req.body.title;
    if (title) {

      CategoryModel.create({
        title,
        slug: Slugify(title, { lower: true })
      }).then(() => {
        res.redirect('/')
      })
    }
    res.send('ola')
  }
}

module.exports = CateControllers;