const aboutService = require('../services/aboutService');
const router = require('express').Router();

router.get('/', async (req, res) => {
    const data = await aboutService.getStatistics();
    res.json(data);
});

module.exports = router;
