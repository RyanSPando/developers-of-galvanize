const MakePlayer = require('./helpers/playerObjMaker').MakePlayer;
const knex = require('../db/knex.js');

const playerArray = [];

function setUpPlayer(object) {

  var player = new MakePlayer(object.user_id, object.game_id, object.color, object.avatar_url);
  playerArray.push(player);

  return knex('user_game').insert({user_id: player.user_id, game_id: player.game_id, color: player.color, avatar_url: player.avatar_url}).returning('*').then((player) => player);
}

function getPlayer(id) {
  return knex('user_game').where({game_id: id});
}

module.exports = {
  setUpPlayer,
  getPlayer
};
