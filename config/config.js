require('dotenv').config();

module.exports = {
    cookieKey: process.env.cookieKey,
    mongoURI: process.env.mongoURI,
    google_id: process.env.google_client_id,
    google_client_secret: process.env.google_client_secret
}