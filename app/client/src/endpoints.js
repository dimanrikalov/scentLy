const baseUrl = 'http://localhost:3000';

const aboutUrl = baseUrl + '/about';
const profileUrl = baseUrl + '/profile';
const catalogUrl = baseUrl + '/catalog';
const loginUrl = baseUrl + '/auth/login';
const logoutUrl = baseUrl + '/auth/logout';
const registerUrl = baseUrl + '/auth/register';
const reviewsUrl = baseUrl + '/catalog/reviews';

module.exports = {
    aboutUrl,
    loginUrl,
    logoutUrl,
    reviewsUrl,
    profileUrl,
    catalogUrl,
    registerUrl,
};
