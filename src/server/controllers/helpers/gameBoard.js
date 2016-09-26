const Board = require('./boardMaker');

function setUpBoard(random) {
  const gameBoard = new Board(random);
  console.log(gameBoard);
}

setUpBoard(true);
