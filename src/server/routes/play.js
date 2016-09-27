const express = require('express');
const router = express.Router();
const authHelpers = require('../controllers/signin');
const gameBoard = require('../controllers/gameBoard.js');
const indexController = require('../controllers/index');

router.get('/', authHelpers.loginRequired, (req, res, next) => {
  const renderObject = {};
  renderObject.title = 'Play!';
  renderObject.sessionID = req.sessionID;
  renderObject.name = req.session.user.username;
  renderObject.first = true;
  res.render('./pages/play', renderObject);
});

router.get('/gameBoard', authHelpers.loginRequired, (req, res, next) => {
  var game_board = gameBoard.setUpBoard(req.query.random);
  res.json(game_board);
});


module.exports = router;
