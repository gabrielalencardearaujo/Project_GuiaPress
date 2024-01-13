const router = require('express').Router();
const TestController = require('@controllers/controllers.js');
const CateControllers = require('@controllers/categories/CategoriesController.js');
const AdminArticles = require('@controllers/admin/AdminArticles.js');
const AdminCategories = require('@controllers/admin/AdminCategories.js');

// Routers Home
router.get('/', TestController.helloWorld);

// Routers Categories
router.get('/categories', CateControllers.home);

// Routers Articles
router.get('/admin/articles', AdminArticles.home);
router.get('/admin/articles/new', AdminArticles.new)
router.post('/admin/articles/save', AdminArticles.save)
router.post('/admin/articles/delete', AdminArticles.delete)

//Rotas Admin
router.get('/admin/categories/', AdminCategories.categories);
router.get('/admin/categories/new', AdminCategories.newCategory);
router.post('/admin/categories/save', AdminCategories.save);
router.post('/admin/categories/delete', AdminCategories.delete);
router.get('/admin/categories/update/:id', AdminCategories.update);
router.post('/admin/categories/update', AdminCategories.update);

module.exports = router;