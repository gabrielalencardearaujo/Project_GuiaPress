const UserModel = require('@controllers/users/UserModel.js');
const CategoryModel = require('@controllers/categories/CategoryModel');
const bcrypt = require('bcryptjs');

const UserController = {
  loginPage(req, res) {
    CategoryModel.findAll().then(categories => {
      res.render('login/index', { categories })
    })
  },

  signup(req, res) {
    const { email, password } = req.body;

    UserModel.findOne({
      where: { email }
    }).then(user => {
      if (!user) {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        UserModel.create({
          email,
          password: hash,
        })
          .then(() => {
            CategoryModel.findAll().then(categories => {
              res.render('login/index', { categories })
            })
          })
          .catch(err => {
            console.error('Nao foi possivel realizar o login.', err)
          })

      } else {
        res.redirect('/signup');
      }
    })
  },

  signupPage(req, res) {
    CategoryModel.findAll().then(categories => {
      res.render('login/signup', { categories })
    })
  },

  signin(req, res) {
    const { email, password } = req.body;

    UserModel.findOne({
      where: { email }
    })
      .then(user => {

        const compare = bcrypt.compareSync(password, user.password);

        if (user && compare) {
          req.session.user = { email }
          res.redirect('/')
        } else {
          res.redirect('/login')
        }

      })
      .catch(err => {
        console.error('Ocorreu um erro ao pesquisar o usuario no banco de dados', err)
      })
  },

  logout(req, res) {
    req.session.user = null
    res.redirect('/')
  }
}

module.exports = UserController;