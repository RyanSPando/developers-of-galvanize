const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Register!';
  res.render('./pages/register', renderObject);
});

module.exports = router;
