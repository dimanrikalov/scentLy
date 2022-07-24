const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { SECRET, EXPIRES_IN } = require('../config/constants');

exports.findByEmail = (email) => User.findOne({ email });

exports.getById = (userId) => User.findOne({ _id: userId });

exports.getByIdDetailed = (userId) =>
    User.findOne({ _id: userId })
        .populate('ownedFragrances')
        .populate('reviews');

exports.updateById = (userId, data) => User.findByIdAndUpdate(userId, data);

exports.register = (data) => User.create(data);

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password');
    }
    return user;
};

exports.createToken = (user) => {
    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
    };

    const tokenPromise = new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            SECRET,
            { expiresIn: EXPIRES_IN },
            (err, decodedToken) => {
                if (err) {
                    return reject(err);
                }
                resolve(decodedToken);
            }
        );
    });
    return tokenPromise;
};
