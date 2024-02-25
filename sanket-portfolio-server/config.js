const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    HOST: process.env.HOST,
    DB_PORT: process.env.PORT,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE
}