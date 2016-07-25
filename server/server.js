const express = require('express');
const app = express();

const port = 3000;

// configure our server with all the middleware
require('./config/middleware.js')(app, express);

app.listen(port, () => console.log(`Listening on port ${port}`));