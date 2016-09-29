const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const signup = require('../controllers/signup');
const signIn = require('../controllers/signin');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Register!';
  res.render('./pages/register', renderObject);
});

router.post('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Register!';
  // Validation
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  renderObject.errors = req.validationErrors();

  if (renderObject.errors) {
    res.render('./pages/register', renderObject);
  } else {
    signup.createUser(req, res)
    .then ((user) => {
      signIn.handleLogin(req, user[0]); })
    .then(() => { signIn.handleResponse(res.redirect('/play'), 201, 'success'); })
    .catch((err) => {
      signIn.handleResponse(res, 500, 'error'); });
  }
});

module.exports = router;
