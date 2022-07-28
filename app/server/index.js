const initDatabase = require('./config/initDatabase');
const initExpress = require('./config/initExpress');

(async function initServer() {
    await initDatabase();
    initExpress();
})();
