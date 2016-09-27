(function() {

  'use strict';

const canvas = document.getElementById('hexmap');
const context = canvas.getContext('2d');

function dockAngleDownLeft(x1, y1, x2, y2, color) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + 5, y1 + 5);
    ctx.lineTo(x2 + 5, y2 + 5);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  function dockAngleDownRight(x1, y1, x2, y2, color) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + 5, y1 - 5);
    ctx.lineTo(x2 + 5, y2 - 5);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  // dockAngleDownRight(295, 105, 275, 85, 'saddlebrown');
  // dockAngleDownLeft(250, 125, 255, 90, 'saddlebrown');

  function upLeft(x, y, color) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = 5;
    ctx.lineTo(x - 30, y - 20);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.restore();
  }

  function upRight(x, y, color) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = 5;
    ctx.lineTo(x + 30, y - 20);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.restore();
  }

  function vertical(x, y, color) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = 5;
    ctx.lineTo(x, y - 40);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.restore();
  }
  //docks from A1
  upLeft(295, 105, 'saddlebrown');
  vertical(255, 130, 'saddlebrown');
  //docks from A2
  upRight(395, 105, 'saddlebrown');
  vertical(445, 130, 'saddlebrown');
  //dock from B4
  upRight(545, 180, 'saddlebrown');
  vertical(595, 205, 'saddlebrown');
  //dock from C5
  upLeft(670, 295, 'saddlebrown');
  upRight(640, 328, 'saddlebrown');
  //dock from D4
  vertical(595, 430, 'saddlebrown');
  upLeft(570, 435, 'saddlebrown');
  //dock from E2
  vertical(450, 500, 'saddlebrown');
  upLeft(425, 510, 'saddlebrown');
  //dock from E1
  vertical(255, 500, 'saddlebrown');
  upRight(275, 508, 'saddlebrown');
  //dock from D1
  upLeft(208, 398, 'saddlebrown');
  upRight(180, 365, 'saddlebrown');
  //dock from B1
  upLeft(208, 248, 'saddlebrown');
  upRight(180, 220, 'saddlebrown');

})();
