const router = require('express').Router();
const User = require('../db_config/controllers/user_controller');

router.route('/users')
  .get((req, res) => {
    User.getAll()
    .then((data) => {
      res.status(200).json(data);
    });
  });

router.route('/users')
  .post((req, res) => {
    User.postOne(req.body)
    .then((data) => {
      res.status(200).json(data);
    });
  });

module.exports = router;