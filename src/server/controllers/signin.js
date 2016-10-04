const bcrypt = require('bcryptjs');

function handleLogin(req, user) {
  req.session.user = user;
}

function handleResponse(res, code, statusMsg) {
  res.status(code).redirect('/play');
}

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRequired(req, res, next) {
  if (!req.session.user) {
    res.render('index', { message: req.flash('errorMessage', 'Please log in to do that.'), notLogged: true });
  } else {
    return next();
  }
}

function logCheck(arr, req) {
  if (req.session.user) {
    arr.logged = true;
  } else {
    arr.notLogged = true;
  }
}

function logIn(email, password, knex, callBack) {
  knex('users')
  .where('email', email)
  .then((user) => {
    if (user.length) {
      if (bcrypt.compareSync(password, user[0].password)) {
        callBack(null, user);
      } else {
        callBack(null, 'No user');
      }
    } else {
      callBack(null, 'No user');
    }
  }).catch((err) => {
    callBack(err);
  });
}

module.exports = {
  handleResponse,
  handleLogin,
  comparePass,
  loginRequired,
  logIn,
  logCheck
};
