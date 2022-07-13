const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { SALT_ROUNDS } = require('../config/constants');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'], 
    },
    reviews: [{
        type: mongoose.Types.ObjectId,
        ref: 'Review'
    }]
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, SALT_ROUNDS).then((hashedPassword) => {
        this.password = hashedPassword;
        next();
    });
});

const User = mongoose.model('User', userSchema);

module.exports = User;
