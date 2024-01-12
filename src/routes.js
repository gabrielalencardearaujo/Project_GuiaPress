const router = require('express').Router();
const TestController = require('@controllers/controllers.js');
const CateControllers = require('@controllers/categories/CategoriesController.js');
const AdminController = require('@controllers/admin/AdminArticles.js');
const AdminCategories = require('@controllers/admin/AdminCategories.js');
const ArticleModel = require('./controllers/articles/ArticleModel');

// Routers Home
router.get('/', TestController.helloWorld);

// Routers Categories
router.get('/categories', CateControllers.home);

// Routers Articles
router.get('/admin/articles', AdminController.home);
router.get('/admin/articles/new', AdminController.new)
router.post('/admin/articles/save', AdminController.save)

//Rotas Admin
router.get('/admin/categories/', AdminCategories.categories);
router.get('/admin/categories/new', AdminCategories.newCategory);
router.post('/admin/categories/save', AdminCategories.save);
router.post('/admin/categories/delete', AdminCategories.delete);
router.get('/admin/categories/update/:id', AdminCategories.update);
router.post('/admin/categories/update', AdminCategories.update);

module.exports = router;