const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Setup!';
  res.render('./pages/setup', renderObject);
});

module.exports = router;
