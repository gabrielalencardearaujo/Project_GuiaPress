const router = require('express').Router();
const TestController = require('@controllers/controllers.js');

router.get('/', TestController.helloWorld);

module.exports = router;