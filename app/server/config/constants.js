exports.PORT = 3000;
exports.SALT_ROUNDS = 10;
exports.EXPIRES_IN = '2d';
exports.COOKIE_NAME = 'session-cookie';
const DATABASE_NAME = 'fragrance-forum';
exports.SECRET = 'e73e51012e3d92240d3b46a055dcef68';
exports.CONNECTION_URL = `mongodb://localhost:27017/${DATABASE_NAME}`;
