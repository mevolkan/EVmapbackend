const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

module.exports = {
    NODE_ENV : process.env.NODE_ENV ,
    MONGO_URI : process.env.MONGO_URI ,
    HOST : process.env.HOST,
    PORT : process.env.PORT,
}