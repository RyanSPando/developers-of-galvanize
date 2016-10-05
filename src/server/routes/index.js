const express = require('express');
const router = express.Router();

const signin = require('../controllers/signin');

router.get('/', function (req, res, next) {
  const renderObject = {};
  signin.logCheck(renderObject, req);
  res.render('index', renderObject);
});

module.exports = router;
