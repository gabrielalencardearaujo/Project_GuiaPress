const CategoryModel = require('../categories/CategoryModel');
const Slugify = require('slugify');

const AdminController = {
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
    const {id} = req.body;

    if(id && !isNaN(id)) {
      //Deletar info no banco de dados que possua o mesmo id da variavel id:
      CategoryModel.destroy({
        where: {
          id: id
        }
      }).then(()=> {
        res.redirect('/admin/categories/')
      })

    } else {
      res.redirect('/admin/categories/')
    }
  }
}

module.exports = AdminController;