const __randomTile = ['lumber', 'lumber', 'lumber', 'lumber', 'wheat', 'wheat', 'wheat', 'wheat', 'sheep', 'sheep', 'sheep', 'sheep', 'brick', 'brick', 'brick', 'ore', 'ore', 'ore', 'desert'];
const __rollArr = [5, 10, 8, 2, 9, 3, 4, 6, 11, 6, 11, 3, 4, 5, 12, 8, 10, 9];
const boardSpaces = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

class Board {
  constructor(id, random = false) {
    this.id = id;
    if (random) {
      var newTileArr = Object.assign([], __randomTile);
      var index = 0;
      boardSpaces.map((space) => {
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
    this.one.x = 300;
    this.one.y = 100;
    this.two.x = 400;
    this.two.y = 100;
    this.three.x = 500;
    this.three.y = 100;
    this.four.x = 250;
    this.four.y = 175;
    this.five.x = 350;
    this.five.y = 175;
    this.six.x = 450;
    this.six.y = 175;
    this.seven.x = 550;
    this.seven.y = 175;
    this.eight.x = 200;
    this.eight.y = 250;
    this.nine.x = 300;
    this.nine.y = 250;
    this.ten.x = 400;
    this.ten.y = 250;
    this.eleven.x = 500;
    this.eleven.y = 250;
    this.twelve.x = 600;
    this.twelve.y = 250;
    this.thirteen.x = 250;
    this.thirteen.y = 325;
    this.fourteen.x = 350;
    this.fourteen.y = 325;
    this.fifteen.x = 450;
    this.fifteen.y = 325;
    this.sixteen.x = 550;
    this.sixteen.y = 325;
    this.seventeen.x = 300;
    this.seventeen.y = 400;
    this.eighteen.x = 400;
    this.eighteen.y = 400;
    this.nineteen.x = 500;
    this.nineteen.y = 400;
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

module.exports = {
  Board
};
