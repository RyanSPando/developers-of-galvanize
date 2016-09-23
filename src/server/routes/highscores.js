const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Highscores!';
  res.render('./pages/highscores', renderObject);
});

module.exports = router;
