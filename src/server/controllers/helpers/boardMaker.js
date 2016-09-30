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
    this.allVertices = [];
    this.allEdges = [];
    this.allEdgeEndPoints = [];
    boardSpaces.forEach((space) => {
      this[space].vertices = __getVertices(this[space].x, this[space].y);
      this[space].vertices.forEach((vertex) => {
        this.allVertices.push(vertex);
      });
      this[space].edges = __getEdges(this[space].vertices, this.allEdgeEndPoints);
      this[space].edges.forEach((edge) => {
        this.allEdges.push(edge);
      });
    });
    this.allVertices = this.allVertices.filter((vertex, index, self) => {
      var results = null;
      for (let i = index + 1; i < self.length; i++) {
        results = vertex.equals(self[i]);
        if (results) return false;
      }
      return true;
    });
    this.allEdges = this.allEdges.filter((edge, index, self) => {
      var results = null;
      for (let i = index + 1; i < self.length; i++) {
        results = edge.equals(self[i]);
        if (results) {
          this.allEdgeEndPoints[index] = 'match';
          return false;
        }
      }
      return true;
    });
    this.allEdgeEndPoints = this.allEdgeEndPoints.filter((edge, index, self) => {
      return edge !== 'match';
    });
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

function __getEdges(vertices, allEdgeEndPoints) {
  var edgeArr = [];
  for (let i = 0; i < vertices.length; i++) {
    if (i !== vertices.length - 1) {
      edgeArr.push([((vertices[i][0] + vertices[i + 1][0]) / 2), ((vertices[i][1] + vertices[i + 1][1]) / 2)]);
      allEdgeEndPoints.push([[vertices[i][0], vertices[i][1]], [vertices[i + 1][0], vertices[i + 1][1]]]);
    } else {
      edgeArr.push([((vertices[i][0] + vertices[0][0]) / 2), ((vertices[i][1] + vertices[0][1]) / 2)]);
      allEdgeEndPoints.push([[vertices[i][0], vertices[i][1]], [vertices[0][0], vertices[0][1]]]);
    }
  }
  return edgeArr;
}

// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array) return false;
  // compare lengths - can save a lot of time
  if (this.length !== array.length) return false;
  for (let i = 0; i < this.length; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i])) return false;
    } else if (this[i] !== array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};

module.exports = {
  Board
};
