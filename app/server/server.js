const express = require('express');
const app = express();
const router = require('./config/router');

const port = 8080;

console.log('process.env.POSTGRES_PASSWORD: ', process.env.POSTGRES_PASSWORD);
console.log('process.env.POSTGRES_USER: ', process.env.POSTGRES_USER);
console.log('process.env.POSTGRES_DB: ', process.env.POSTGRES_DB);

// configure our server with all the middleware
require('./config/middleware.js')(app, express, router);

app.get('/*', (req, res) => res.redirect('/'));

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
