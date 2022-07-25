const router = require('express').Router();
const { COOKIE_NAME } = require('../config/constants');
const api = require('../services/userService');

//isLogged middleware??????
//isOwner ???
router.post('/register', async (req, res) => {
    const {
        email,
        name,
        profileImage,
        password,
        repeatPassword,
        country,
        city,
        age,
        gender,
    } = req.body;

    const user = await api.findByEmail(email);
    if (user) {
        return res
            .status(403)
            .json({ message: 'User with such email already exists!' });
    }

    if (password !== repeatPassword) {
        return res.status(400).json({ message: 'Passwords do not match!' });
    }
    try {
        await api.register({
            email,
            name,
            profileImage,
            password,
            repeatPassword,
            country,
            city,
            age,
            gender,
        });

        const user = await api.login({ email, password });
        const token = await api.createToken(user);
        res.cookie(COOKIE_NAME, token, { httpOnly: true });
        res.json({ message: 'Successfully registered!', user });
    } catch (err) {
        res.status(404).json({ message: 'Bad request' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Enter email and password!' });
    }
    try {
        const user = await api.login({ email, password });
        const token = await api.createToken(user);
        res.cookie(COOKIE_NAME, token, { httpOnly: true });
        res.json({ message: 'Successfully logged in!', user });
    } catch (err) {
        res.status(404).json({ message: 'Invalid email or password!' });
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.json({ message: 'Successfully logged out' });
});

module.exports = router;
