const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Forgot Password!!';
  res.render('./pages/forgot-password', renderObject);
});

module.exports = router;
