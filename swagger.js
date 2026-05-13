const swaggerAutogen = require('swagger-autogen')();
const { config } = require('dotenv');
config();
const doc = {
    info: {
        title: 'CSE341 API',
        description: 'API for CSE341'
    },
    host: process.env.PUBLISHED_WEB_URI || 'localhost:8080',
    schemes: ['http', 'https'],
};

const outputFile = './swagger-output.json';
const routes = ['src/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);