const router = require('express').Router();
const aboutService = require('../services/aboutService');

router.get('/', async (req, res) => {
    try{
        const data = await aboutService.getStatistics();
        res.json(data);
    } catch (err) {
        res.status(400).json({message: 'Error'});
    }
});

module.exports = router;
