const bodyParser = require('body-parser');

module.exports = function (app, express, router) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // serve static asset at '/'
  app.use(express.static(__dirname + '/../../client'));
  app.use('/api/v1', router);
};