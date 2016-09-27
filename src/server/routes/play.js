const express = require('express');
const router = express.Router();
const authHelpers = require('../controllers/signin');

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
  const renderObject = {};
  renderObject.title = 'Play!';
  res.render('./pages/play', renderObject);
});

module.exports = router;
