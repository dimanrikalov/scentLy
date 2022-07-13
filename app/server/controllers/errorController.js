const router = require('express').Router();



router.get('', (req, res) => {
    res.status(404).json({"message": "Page not found"});
})

module.exports = router;