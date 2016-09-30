const MakePlayer = require('./helpers/playerObjMaker').MakePlayer;
const knex = require('../db/knex.js');

function setUpPlayer(object) {

  var player = new MakePlayer(object.user_id, object.game_id, object.color, object.avatar_url);

  return knex('user_game').insert({user_id: player.user_id, game_id: player.game_id, color: player.color, avatar_url: player.avatar_url}).returning('*').then((player) => (player));
}

function getPlayer(gameID, user_id) {
  return knex('user_game').where({game_id: gameID, user_id: user_id});
}

module.exports = {
  setUpPlayer,
  getPlayer
};
