const router = require('express').Router();
const TestController = require('@controllers/controllers.js');
const CateControllers = require('@controllers/categories/CategoriesController.js');
const ArtControllers = require('@controllers/articles/ArticleController.js');
const AdminController = require('@controllers/admin/AdminController.js');
const ArticleModel = require('./controllers/articles/ArticleModel');

// Routers Home
router.get('/', TestController.helloWorld);

// Routers Categories
router.get('/categories', CateControllers.home);

// Routers Articles
router.get('/articles', ArtControllers.home);
router.get('/admin/articles/new', ArtControllers.new)
router.post('/admin/articles/save', ArtControllers.save)

//Rotas Admin
router.get('/admin/categories/', AdminController.categories);
router.get('/admin/categories/new', AdminController.newCategory);
router.post('/admin/categories/save', AdminController.save);
router.post('/admin/categories/delete', AdminController.delete);
router.get('/admin/categories/update/:id', AdminController.update);
router.post('/admin/categories/update', AdminController.update);

module.exports = router;