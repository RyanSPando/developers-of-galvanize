const MakePlayer = require('./helpers/playerObjMaker').MakePlayer;
const knex = require('../db/knex.js');

function setUpPlayer(object) {

  var player = new MakePlayer(object.user_id, object.game_id, object.color, object.avatar_url);
  console.log(player);

  return knex('user_game').insert({user_id: player.user_id, gameID: player.game_id, color: player.color, avatar_url: player.avatar_url}).returning('*').then((player) => player);
}

function getPlayer(gameID, user_id) {
  return knex('user_game').where({gameID: gameID, user_id: user_id});
}

module.exports = {
  setUpPlayer,
  getPlayer
};
