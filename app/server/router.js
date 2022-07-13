const router = require('express').Router();
const catalogController = require('./controllers/catalogController');
const aboutController = require('./controllers/aboutController');
const errorController = require('./controllers/errorController');
const authController = require('./controllers/authController');
const homeController = require('./controllers/homeController');


router.use('/', homeController);
router.use('/auth', authController);
router.use('/catalog', catalogController);
router.use('/about', aboutController);

router.use('*', errorController);

module.exports = router;