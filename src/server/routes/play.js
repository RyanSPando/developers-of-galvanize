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
  res.render('./pages/findGame', renderObject);
});

router.post('/gameBoard', authHelpers.loginRequired, (req, res, next) => {
  gameBoard.setUpBoard(req.body.random).then((result) => {
    res.json(result[0].board);
  });
});

router.get('/:gameID', authHelpers.loginRequired, (req, res, next) => {
  const renderObject = {};
  renderObject.title = 'Play!';
  renderObject.sessionID = req.sessionID;
  renderObject.name = req.session.user.username;
  res.render('./pages/play', renderObject);
});

router.get('/:gameID/join', authHelpers.loginRequired, (req, res, next) => {
  gameBoard.getBoard(req.params.gameID).then((result) => {
    console.log(result);
    res.json(result[0].board);
  });
});

module.exports = router;
