const bcrypt = require('bcryptjs');

function handleLogin(req, user) {
  // check if in db
  req.session.user = user;
  // req.session.uuid = id
}

// redirect page to page you were on // <--- change this ---->>>
function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRequired(req, res, next) {
  const renderObject = {};
  renderObject.message = 'please log in';
  if (!req.session.user) {
   res.render('error', renderObject);
  } else {
    return next();
  }
};

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
  logIn
}
