const Board = require('./helpers/boardMaker').Board;
const knex = require('../db/knex.js');

function setUpBoard(random) {
  var id = generateUUID();
  var board = new Board(id, random);
  return knex('games').insert({board: JSON.stringify(board), gameID: id}).returning('*')
  .then((gameState) => {
    return gameState;
  });
}

function getBoard(id) {
  return knex('games').where({gameID: id});
}

function getPlayerBoard(gameID, user_id) {
  return knex('games').where({gameID: gameID})
  .join('user_game', 'games.gameID', 'user_game.gameID');
}

function generateUUID() {
  var date = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(char) {
    var random = (date + Math.random() * 16) % 16 | 0;
    date = Math.floor(date / 16);
    return (char === 'x' ? random : (random & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

module.exports = {
  setUpBoard,
  getBoard
};
