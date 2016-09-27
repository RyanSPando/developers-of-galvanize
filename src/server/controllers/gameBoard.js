const Board = require('./helpers/boardMaker').Board;

function setUpBoard(random) {
  var id = generateUUID();
  var board = new Board(id, random);
  return board;
}

function generateUUID(){
  var date = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(char) {
    var random = (date + Math.random()*16)%16 | 0;
    date = Math.floor(date / 16);
    return (char === 'x' ? random : (random&0x3|0x8)).toString(16);
  });
  return uuid;
}

module.exports = {setUpBoard};
