const express = require('express');
const router = require('../router');
const { PORT } = require('./constants');
const cors = require('../middlewares/cors');
const cookieParser = require('cookie-parser');


module.exports = () => {
    const app = express();
    
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());
    app.use(router);

    app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`)
    );

};
