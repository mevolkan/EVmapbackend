const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Determine the environment file path
const envFilePath = path.resolve(__dirname, `${process.env.NODE_ENV}.env`);
const defaultEnvFilePath = path.resolve(__dirname, '.env');

// Check if the environment-specific file exists, otherwise use the default .env file
const finalEnvFilePath = fs.existsSync(envFilePath) ? envFilePath : defaultEnvFilePath;

// Load the environment variables from the chosen file
dotenv.config({
    path: finalEnvFilePath
});

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
};
