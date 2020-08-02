const axios = require ('axios');
require('dotenv').config();

function getGoogleBooks(keywords) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keywords}&key=${process.env.REACT_APP_GOOGLE_KEY}`)
};

module.exports = getGoogleBooks;