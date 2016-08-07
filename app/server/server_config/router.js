const router = require('express').Router();
const User = require('../db_config/controllers/user_controller');
const RFI = require('../db_config/controllers/rfi_controller');

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

router.route('/RFIs')
  .post((req, res) => {
    RFI.postOne(req.body)
    .then((data) => {
      res.status(200).json(data);
    });
  });

router.route('/RFIs/:rfi_number')
  .get((req, res) => {
    const rfiNumber = req.params.rfi_number
    RFI.getOne(rfiNumber)
    .then((data) => {
      res.status(200).json(data);
    });
  });

module.exports = router;