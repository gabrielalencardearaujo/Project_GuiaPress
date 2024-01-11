const router = require('express').Router();
const TestController = require('@controllers/controllers.js');
const CateControllers = require('@controllers/categories/CategoriesController.js');
const ArtControllers = require('@controllers/articles/ArticleController.js');

// Routers Home
router.get('/', TestController.helloWorld);

// Routers Categories
router.get('/categories', CateControllers.home);

// Routers Articles
router.get('/articles', ArtControllers.home)

//Rotas Admin
router.get('/admin/categories/new', CateControllers.newCategory)
router.post('/admin/categories/save', CateControllers.save)

module.exports = router;