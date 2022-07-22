const cors = require('cors');
const express = require('express');
const router = require('../router');
const { PORT } = require('./constants');
const cookieParser = require('cookie-parser');


module.exports = () => {
    const app = express();

    app.use(express.json());
    app.use(cookieParser());
    app.use(cors({
        origin: 'http://localhost:3001',
        credentials: true,
    }));
    app.use(router);

    app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`)
    );

};
