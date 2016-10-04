const express = require('express');
const router = express.Router();
const logIn = require('../controllers/signIn');

router.get('/', (req, res, next) => {
  req.session.user = null;
  console.log('this should have worked');
  res.json({logout: 'You have been successfully logged out.'});
});

module.exports = router;
