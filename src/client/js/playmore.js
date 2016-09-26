(function() {

  'use strict';

var canvas = document.getElementById('hexmap'),
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

  // ctx.fillStyle = this.color;
  // ctx.fillRect(this.pos.x,this.pos.y,this.area.w, this.area.h);
  // ctx.fill();
  // // letter
  // ctx.beginPath();
  // ctx.fillStyle = "white";
  // ctx.fillText(this.name,(this.pos.x+6),(this.pos.y+23));
  // ctx.font = "15px Helvetica";
  // ctx.fill();

})();
