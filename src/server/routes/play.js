const express = require('express');
const router = express.Router();
const authHelpers = require('../controllers/signin');

const indexController = require('../controllers/index');

router.get('/', authHelpers.loginRequired, (req, res, next) => {
  const renderObject = {};
  renderObject.title = 'Play!';
  res.render('./pages/play', renderObject);
});

module.exports = router;
