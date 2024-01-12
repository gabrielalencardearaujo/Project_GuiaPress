const Controllers = {
  home(req, res) {
    res.send('Pagina de articles.')
  },

  new(req, res) {
    res.render('admin/articles/new')
  }
}

module.exports = Controllers;