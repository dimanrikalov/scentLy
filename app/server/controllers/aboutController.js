const router = require('express').Router();

router.get('/', (req, res) => {
    res.json([{"about": "aboutInfo"}]);
});

module.exports = router;
