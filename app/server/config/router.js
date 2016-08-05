const router = require('express').Router();
const queries = require('../db_config/queries');

router.route('/pageview')
  .get((req, res) => {
    queries.getAll()
    .then((data) => {
      res.status(200).json(data);
    });
  });

router.route('/pageview')
  .post((req, res) => {
    queries.postOne(req)
    .then((data) => {
      res.status(200).json(data);
    });
  });

module.exports = router;