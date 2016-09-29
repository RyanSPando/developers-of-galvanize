const express = require('express');
const router = express.Router();
const passport = require('../auth/local');
const signin = require('../controllers/signin');
const validate = require('../controllers/signup');
const knex = require('../db/knex');

router.post('/', (req, res, next) => {
  const email = req.body.email_check;
  const password = req.body.password_check;
  signin.logIn(email, password, knex, (err, results) => {
    // console.log('results', results);
    switch (results) {
      case 'No user':
        res.json({error: 'Incorrect Password/Email'});
        break;
      default:
        req.session.user = {
          username: results[0].username,
          email: results[0].email,
          user_id: results[0].id,
        };
        res.redirect('/play');
        break;
    }
  });
});

// router.get('/logout', signup.loginRequired, (req, res, next) => {
//   req.logout();
//   handleResponse(res, 200, 'success');
// });

module.exports = router;
