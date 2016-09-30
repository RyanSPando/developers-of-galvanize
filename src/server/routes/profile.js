const express = require('express');
const router = express.Router();
const authHelpers = require('../controllers/signin');
const User = require('../controllers/profile');
const knex = require('../db/knex');

router.get('/', authHelpers.loginRequired, function (req, res, next) {
  const renderObject = {};
  knex('users')
  .where('email', req.session.user.email)
  .then((user) => {
    if (user) {
      renderObject.user = user;
      renderObject.title = 'My Profile!';
      // console.log('user =>', user);
      res.render('./profile/profile', renderObject);
    } else {
      console.log('user not found');
      renderObject.title = 'user not found';
      res.render('./profile/profile', renderObject);
    }
  });
});

router.get('/:id/edit', authHelpers.loginRequired, User.editPage);
router.put('/:id/edit', authHelpers.loginRequired, User.updateProfile);
router.delete('/:id/delete', function (req, res, next) {
  const id = req.params.id;
  console.log('id', id);
  User.deleteProfile(id, req)
  .then(() => {
    res.send('success!');
  })
  .catch((err) => {
    return next(err);
  });
});

module.exports = router;
