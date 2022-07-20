const baseUrl = 'http://localhost:3000';

const aboutUrl = baseUrl + '/about';
const catalogUrl = baseUrl + '/catalog';
const loginUrl = baseUrl + '/auth/login';
const registerUrl = baseUrl + '/auth/register';

module.exports = { 
    registerUrl, 
    loginUrl, 
    catalogUrl,
    aboutUrl
};
