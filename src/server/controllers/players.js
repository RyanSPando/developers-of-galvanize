const MakePlayer = require('./helpers/playerObjMaker').MakePlayer;
const knex = require('../db/knex.js');

const playerArray = [];

function setUpPlayer(name, color, avatar_url, user_id, game_id) {

  var player = new MakePlayer(name, color, avatar_url, user_id, game_id);
  return knex('user_game').insert({player: JSON.stringify(player), gameID: game_id}).returning('*')
  .then((playerState) => {
    return playerState;
  });
}

function getPlayer(id) {
  return knex('user_game').where({gameID: id});
}

module.exports = {
  setUpPlayer,
  getPlayer
};
