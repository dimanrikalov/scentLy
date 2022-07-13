const mongoose = require('mongoose');
const { CONNECTION_URL } = require('./constants');

module.exports = async () => {
    mongoose.connection.on('open', () => console.log('Connecting to database...'));
    return mongoose.connect(CONNECTION_URL);
};
