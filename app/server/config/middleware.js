const bodyParser = require('body-parser');

module.exports = function (app, express) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // execute page count
  var pageVisitCount = 0;
  app.use((req, res, next) => {
    if ( req.url === '/' ) console.log(++pageVisitCount);
    next();
  });
  // serve static asset at '/'
  app.use(express.static(__dirname + '/../../client'));
};