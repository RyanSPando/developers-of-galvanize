const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Play!';
  res.render('./pages/play', renderObject);
});

module.exports = router;