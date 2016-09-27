(function() {
  'use strict';

var canvas = document.getElementById('hexmap2'),
    canvasLeft = canvas.offsetLeft,
    canvasTop = canvas.offsetTop,
    context = canvas.getContext('2d'),
    elements = [];
// Add event listener for `click` events.
canvas.addEventListener('click', function(event) {
  var x = event.pageX - canvasLeft,
      y = event.pageY - canvasTop;
    console.log(x, y);
  }, false);

function SettlementSquare(x, y, w, h, fill) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.fill = fill;
}

// check if context exist
if (canvas.getContext) {
    var squares = [];
    //first row
    squares.push(new SettlementSquare(240, 165, 20, 20, '#333'));
    squares.push(new SettlementSquare(240, 115, 20, 20, '#333'));
    squares.push(new SettlementSquare(290, 90, 20, 20, '#333'));
    squares.push(new SettlementSquare(340, 115, 20, 20, '#333'));
    squares.push(new SettlementSquare(340, 165, 20, 20, '#333'));
    squares.push(new SettlementSquare(290, 190, 20, 20, '#333'));
    squares.push(new SettlementSquare(340, 165, 20, 20, '#333'));
    squares.push(new SettlementSquare(390, 90, 20, 20, '#333'));
    squares.push(new SettlementSquare(440, 115, 20, 20, '#333'));
    squares.push(new SettlementSquare(440, 165, 20, 20, '#333'));
    squares.push(new SettlementSquare(390, 190, 20, 20, '#333'));
    squares.push(new SettlementSquare(440, 115, 20, 20, '#333'));
    squares.push(new SettlementSquare(490, 90, 20, 20, '#333'));
    squares.push(new SettlementSquare(540, 115, 20, 20, '#333'));
    squares.push(new SettlementSquare(540, 165, 20, 20, '#333'));
    squares.push(new SettlementSquare(490, 190, 20, 20, '#333'));

    //second row
    squares.push(new SettlementSquare(190, 240, 20, 20, '#333'));
    squares.push(new SettlementSquare(190, 190, 20, 20, '#333'));
    squares.push(new SettlementSquare(240, 165, 20, 20, '#333'));
    squares.push(new SettlementSquare(290, 240, 20, 20, '#333'));
    squares.push(new SettlementSquare(240, 265, 20, 20, '#333'));
    squares.push(new SettlementSquare(340, 265, 20, 20, '#333'));
    squares.push(new SettlementSquare(390, 240, 20, 20, '#333'));
    squares.push(new SettlementSquare(440, 265, 20, 20, '#333'));
    squares.push(new SettlementSquare(490, 240, 20, 20, '#333'));
    squares.push(new SettlementSquare(590, 190, 20, 20, '#333'));
    squares.push(new SettlementSquare(590, 240, 20, 20, '#333'));
    squares.push(new SettlementSquare(540, 265, 20, 20, '#333'));

    //third row
    squares.push(new SettlementSquare(140, 315, 20, 20, '#333'));
    squares.push(new SettlementSquare(140, 265, 20, 20, '#333'));
    squares.push(new SettlementSquare(240, 265, 20, 20, '#333'));
    squares.push(new SettlementSquare(240, 315, 20, 20, '#333'));
    squares.push(new SettlementSquare(190, 340, 20, 20, '#333'));
    squares.push(new SettlementSquare(290, 340, 20, 20, '#333'));
    squares.push(new SettlementSquare(340, 315, 20, 20, '#333'));
    squares.push(new SettlementSquare(390, 340, 20, 20, '#333'));
    squares.push(new SettlementSquare(440, 315, 20, 20, '#333'));
    squares.push(new SettlementSquare(490, 340, 20, 20, '#333'));
    squares.push(new SettlementSquare(540, 315, 20, 20, '#333'));
    squares.push(new SettlementSquare(590, 340, 20, 20, '#333'));
    squares.push(new SettlementSquare(640, 315, 20, 20, '#333'));
    squares.push(new SettlementSquare(640, 265, 20, 20, '#333'));

    //fourth row
    squares.push(new SettlementSquare(240, 415, 20, 20, '#333'));
    squares.push(new SettlementSquare(190, 390, 20, 20, '#333'));
    squares.push(new SettlementSquare(290, 390, 20, 20, '#333'));
    squares.push(new SettlementSquare(390, 390, 20, 20, '#333'));
    squares.push(new SettlementSquare(340, 415, 20, 20, '#333'));
    squares.push(new SettlementSquare(440, 415, 20, 20, '#333'));
    squares.push(new SettlementSquare(490, 390, 20, 20, '#333'));
    squares.push(new SettlementSquare(540, 415, 20, 20, '#333'));
    squares.push(new SettlementSquare(590, 390, 20, 20, '#333'));
    squares.push(new SettlementSquare(290, 490, 20, 20, '#333'));
    squares.push(new SettlementSquare(340, 465, 20, 20, '#333'));
    squares.push(new SettlementSquare(240, 465, 20, 20, '#333'));
    squares.push(new SettlementSquare(390, 490, 20, 20, '#333'));
    squares.push(new SettlementSquare(440, 465, 20, 20, '#333'));
    squares.push(new SettlementSquare(490, 490, 20, 20, '#333'));
    squares.push(new SettlementSquare(540, 465, 20, 20, '#333'));

    context = canvas.getContext('2d');
    for (var i in squares) {
        let newSquare = squares[i];
        context.fillStyle = newSquare.fill;
        context.fillRect(newSquare.x, newSquare.y, newSquare.w, newSquare.h);
    }
}

})();
