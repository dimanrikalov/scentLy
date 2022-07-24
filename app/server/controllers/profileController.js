const router = require('express').Router();
const userService = require('../services/userService');

router.get('/:userId', async (req, res) => {
    const user = await userService.getByIdDetailed(req.params.userId);
    res.json(user);
});


module.exports = router;