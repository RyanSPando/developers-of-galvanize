const knex = require('../db/knex');
const signin = require('../controllers/signin');

function editPage(req, res, next) {
  let id = req.params.id;
  const renderObject = {};
  signin.logCheck(renderObject, req);
  knex('users')
  .where('id', id)
  .then((user) => {
    if (user) {
      renderObject.user = user;
      renderObject.title = 'Edit Profile!';
      res.render('./profile/profile-edit', renderObject);
    } else {
      renderObject.title = 'user not found';
      res.render('./profile/profile-edit', renderObject);
    }
  });
}

function updateProfile(req, res, next) {
  let name = req.body.username.charAt(0).toUpperCase() + req.body.username.slice(1);
  const id = parseInt(req.params.id);
  const updatedUsername = name;
  const updatedEmail = req.body.email;
  // const updatedPic = req.body.pic;
  knex('users')
  .update({
    email: updatedEmail,
    username: updatedUsername
  })
  .where('id', id)
  .returning('*')
  .then((user) => {
    console.log('user =>', user);
    signin.handleLogin(req, user[0]);
    res.status(200).json({
      status: 'success',
      message: `${user[0].username} has been updated!`
    });
  });
}

function deleteProfile(req, res) {
  let id = req.params.id;
  return knex('users')
  .where('id', id)
  .del()
  .then(() => {
    req.session.user = null;
    res.redirect('/');
  });
}

module.exports = {
  editPage,
  updateProfile,
  deleteProfile
};
