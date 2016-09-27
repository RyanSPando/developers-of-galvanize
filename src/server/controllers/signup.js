const knex = require('../db/knex');
const bcrypt = require('bcryptjs');

//hashing salt || is it salting hash ?
function hashSalt (password) {
  var salt = bcrypt.genSaltSync();
  var hashed = bcrypt.hashSync(password, salt);
  return hashed;
}
//add validator and check dbs <-------- ***********
//create a user inside db
function createUser(req) {
  var pass = hashSalt(req.body.password);
  var newUser = {
    email: req.body.email,
    username: req.body.username,
    password: pass
  };
  return knex('users').insert(newUser).returning('*');
}

module.exports = {
  createUser,
  hashSalt
};
