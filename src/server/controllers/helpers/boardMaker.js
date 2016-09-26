const randomTile = ['lumber', 'lumber', 'lumber', 'lumber', 'wheat', 'wheat', 'wheat', 'wheat', 'sheep', 'sheep', 'sheep', 'sheep', 'brick', 'brick', 'brick', 'ore', 'ore', 'ore', 'desert'];
const randomRoll = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];

class Board {
  constructor(random =  false) {
    this.one = random ? __getRandomTile() : {type: 'ore', roll: 10};
    this.two = random ? __getRandomTile() : {type: 'sheep', roll: 2};
    this.three = random ? __getRandomTile() : {type: 'lumber', roll: 9};
    this.four = random ? __getRandomTile() : {type: 'wheat', roll: 12};
    this.five = random ? __getRandomTile() : {type: 'brick', roll: 6};
    this.six = random ? __getRandomTile() : {type: 'sheep', roll: 4};
    this.seven = random ? __getRandomTile() : {type: 'brick', roll: 10};
    this.eight = random ? __getRandomTile() : {type: 'wheat', roll: 9};
    this.nine = random ? __getRandomTile() : {type: 'lumber', roll: 11};
    this.ten = random ? __getRandomTile() : {type: 'desert', roll: null};
    this.eleven = random ? __getRandomTile() : {type: 'lumber', roll: 3};
    this.twelve = random ? __getRandomTile() : {type: 'ore', roll: 8};
    this.thirteen = random ? __getRandomTile() : {type: 'lumber', roll: 8};
    this.fourteen = random ? __getRandomTile() : {type: 'ore', roll: 3};
    this.fifteen = random ? __getRandomTile() : {type: 'wheat', roll: 4};
    this.sixteen = random ? __getRandomTile() : {type: 'sheep', roll: 5};
    this.seventeen = random ? __getRandomTile() : {type: 'brick', roll: 5};
    this.eighteen = random ? __getRandomTile() : {type: 'wheat', roll: 6};
    this.nineteen = random ? __getRandomTile() : {type: 'sheep', roll: 11};

  }
}

function __getRandomTile() {
  var randomTileNum = Math.floor(Math.random() * randomTile.length);
  var type = randomTile[randomTileNum];
  randomTile.splice(randomTileNum, 1);
  var roll = null;
  if (type !== 'desert') {
    var randomRollNum = Math.floor(Math.random() * randomRoll.length);
    roll = randomRoll[randomRollNum];
    randomRoll.splice(randomRollNum, 1);
  }
  return {
    type: type,
    roll: roll
  };
}

module.exports = Board;
