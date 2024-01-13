const router = require('express').Router();
const HomeController = require('@controllers/HomeController.js');
const CateControllers = require('@controllers/categories/CategoriesController.js');
const ArtControllers = require('@controllers/articles/ArticleController.js');
const AdminArticles = require('@controllers/admin/AdminArticles.js');
const AdminCategories = require('@controllers/admin/AdminCategories.js');

// Routers Home
router.get('/', HomeController.home);

// Routers Categories
router.get('/category/:slug', CateControllers.categoryPage);

// Routers Articles:
router.get('/article/:slug', ArtControllers.articlePage);

// Routers Admin Articles
router.get('/admin/articles', AdminArticles.home);
router.get('/admin/articles/new', AdminArticles.new)
router.post('/admin/articles/save', AdminArticles.save)
router.post('/admin/articles/delete', AdminArticles.delete)

//Rotas Admin Categories
router.get('/admin/categories/', AdminCategories.categories);
router.get('/admin/categories/new', AdminCategories.newCategory);
router.post('/admin/categories/save', AdminCategories.save);
router.post('/admin/categories/delete', AdminCategories.delete);
router.get('/admin/categories/update/:id', AdminCategories.update);
router.post('/admin/categories/update', AdminCategories.update);

module.exports = router;