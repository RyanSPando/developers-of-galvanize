const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'OOPS! This page does not exist.';
  res.render('./pages/other-pages', renderObject);
});

module.exports = router;
