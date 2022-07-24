const router = require('express').Router();
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const errorController = require('./controllers/errorController');
const aboutController = require('./controllers/aboutController');
const catalogController = require('./controllers/catalogController');
const profileController = require('./controllers/profileController');

router.use('/', homeController);
router.use('/auth', authController);
router.use('/about', aboutController);
router.use('/catalog', catalogController);
router.use('/profile', profileController);
router.use('*', errorController);

module.exports = router;