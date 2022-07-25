const router = require('express').Router();
const userService = require('../services/userService');

router.get('/:userId', async (req, res) => {
    try {
        const user = await userService.getByIdDetailed(req.params.userId);
        res.json(user);
    } catch (err) {
        return res
            .status(404)
            .json({ message: 'Server error.Could not get user information!' });
    }
});

module.exports = router;
