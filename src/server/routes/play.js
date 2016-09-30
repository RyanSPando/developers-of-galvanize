const express = require('express');
const router = express.Router();
const authHelpers = require('../controllers/signin');
const gameBoard = require('../controllers/gameBoard.js');
const players = require('../controllers/players.js');
const indexController = require('../controllers/index');

router.get('/', authHelpers.loginRequired, (req, res, next) => {
  const renderObject = {};
  renderObject.title = 'Play!';
  renderObject.sessionID = req.sessionID;
  renderObject.name = req.session.user.username;
  res.render('./pages/findGame', renderObject);
});

router.post('/gameBoard', authHelpers.loginRequired, (req, res, next) => {
  gameBoard.setUpBoard(req.body.random).then((result) => {
    res.json(result[0].board);
  }).catch((err) => {
    console.log(err);
  });
});

router.get('/:gameID', authHelpers.loginRequired, (req, res, next) => {
  const renderObject = {};
  renderObject.title = 'Play!';
  renderObject.sessionID = req.sessionID;
  renderObject.name = req.session.user.username;
  renderObject.first = true;
  res.render('./pages/play', renderObject);
});

router.get('/:gameID/join', authHelpers.loginRequired, (req, res, next) => {
  gameBoard.getBoard(req.params.gameID).then((result) => {
    res.json(result[0].board);
  });
});

router.get('/:gameID/player', authHelpers.loginRequired, (req, res, next) => {
  gameBoard.getPlayerBoard(req.params.gameID, req.session.user.user_id).then((result) => {
    res.json(result);
  });
});

//name, color, avatar_url, user_id, game_id
router.post('/player/new', authHelpers.loginRequired, (req, res, next) => {
  const playerObject = {
    color: req.body.color,
    avatar_url: req.body.avatar_url,
    user_id: req.session.user.user_id,
    game_id: req.body.game_id
  };

  players.setUpPlayer(playerObject).then((result) => {
    console.log(result);
    res.json(result);
  }).catch((err) => {
    console.log(err);
    return next();
  });
});

router.get('/:gameID/yourPlace', authHelpers.loginRequired, (req, res, next) => {
  gameBoard.getPlayerBoard(req.params.gameID, req.session.user.user_id).then(result => {
    console.log(result[0]);
    res.json(result[0]);
  });
});

module.exports = router;
