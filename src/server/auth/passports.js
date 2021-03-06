const passport = require('passport');
const knex = require('../db/knex');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  knex('users').where({id}).first()
  .then((user) => { done(null, user); })
  .catch((err) => { done(err, null); });
});

module.exports = passport;
