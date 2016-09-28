const __randomTile = ['lumber', 'lumber', 'lumber', 'lumber', 'wheat', 'wheat', 'wheat', 'wheat', 'sheep', 'sheep', 'sheep', 'sheep', 'brick', 'brick', 'brick', 'ore', 'ore', 'ore', 'desert'];
const __rollArr = [5, 10, 8, 2, 9, 3, 4, 6, 11, 6, 11, 3, 4, 5, 12, 8, 10, 9];
const boardSpaces = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

class Board {
  constructor(id, random = false) {
    this.id = id;
    if (random) {
      var newTileArr = Object.assign([], __randomTile);
      var index = 0;
      boardSpaces.forEach((space) => {
        this[space] = {type: __getRandomType(newTileArr)};
        if (this[space].type !== 'desert') {
          this[space].roll = __getRandomRoll(this[space].type, index);
          index++;
        } else this[space].roll = null;
      });

    } else {
      this.one = {type: 'ore', roll: 10};
      this.two = {type: 'sheep', roll: 2};
      this.three = {type: 'lumber', roll: 9};
      this.four = {type: 'wheat', roll: 12};
      this.five = {type: 'brick', roll: 6};
      this.six = {type: 'sheep', roll: 4};
      this.seven = {type: 'brick', roll: 10};
      this.eight = {type: 'wheat', roll: 9};
      this.nine = {type: 'lumber', roll: 11};
      this.ten = {type: 'desert', roll: null};
      this.eleven = {type: 'lumber', roll: 3};
      this.twelve = {type: 'ore', roll: 8};
      this.thirteen = {type: 'lumber', roll: 8};
      this.fourteen = {type: 'ore', roll: 3};
      this.fifteen = {type: 'wheat', roll: 4};
      this.sixteen = {type: 'sheep', roll: 5};
      this.seventeen = {type: 'brick', roll: 5};
      this.eighteen = {type: 'wheat', roll: 6};
      this.nineteen = {type: 'sheep', roll: 11};
    }
    this.one.x = 250;
    this.one.y = 125;
    this.two.x = 350;
    this.two.y = 125;
    this.three.x = 450;
    this.three.y = 125;
    this.four.x = 200;
    this.four.y = 200;
    this.five.x = 300;
    this.five.y = 200;
    this.six.x = 400;
    this.six.y = 200;
    this.seven.x = 500;
    this.seven.y = 200;
    this.eight.x = 150;
    this.eight.y = 275;
    this.nine.x = 250;
    this.nine.y = 275;
    this.ten.x = 350;
    this.ten.y = 275;
    this.eleven.x = 450;
    this.eleven.y = 275;
    this.twelve.x = 550;
    this.twelve.y = 275;
    this.thirteen.x = 200;
    this.thirteen.y = 350;
    this.fourteen.x = 300;
    this.fourteen.y = 350;
    this.fifteen.x = 400;
    this.fifteen.y = 350;
    this.sixteen.x = 500;
    this.sixteen.y = 350;
    this.seventeen.x = 250;
    this.seventeen.y = 425;
    this.eighteen.x = 350;
    this.eighteen.y = 425;
    this.nineteen.x = 450;
    this.nineteen.y = 425;
    boardSpaces.forEach((space) => {this[space].vertices = __getVertices(this[space].x, this[space].y);});
  }
}

function __getRandomType(newTileArr) {
  var newTileArrNum = Math.floor(Math.random() * newTileArr.length);
  var type = newTileArr[newTileArrNum];
  newTileArr.splice(newTileArrNum, 1);
  return type;
}

function __getRandomRoll(type, index) {
  var roll = __rollArr[index];
  return roll;
}

function __getVertices(x, y) {
  return [[x, y], [x + 50, y - 25], [x + 100, y], [x + 100, y + 50], [x + 50, y + 75], [x, y + 50]];
}

module.exports = {
  Board
};
