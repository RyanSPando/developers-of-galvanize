const express = require('express');
const router = express.Router();
const authHelpers = require('../controllers/signin');

const indexController = require('../controllers/index');

router.get('/', /*authHelpers.loginRequired,*/ (req, res, next) => {
  const renderObject = {};
  renderObject.title = 'Play!';
  // renderObject.sessionID = req.sessionID;
  // renderObject.name = req.session.user.username;
  res.render('./pages/play', renderObject);
});

module.exports = router;
