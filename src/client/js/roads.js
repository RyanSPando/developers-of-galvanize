// (function() {

  function drawRoad(x1, y1, x2, y2, color, ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = color;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
  //A1 Roads
//
//   drawRoad(312, 107, 338, 117, 'red');
//
//   drawRoad(350, 137, 350, 163, 'red');
//
//   drawRoad(338, 182, 312, 192, 'red');
//
//   drawRoad(288, 192, 262, 182, 'red');
//
//   drawRoad(250, 137, 250, 163, 'red');
//
//   drawRoad(288, 107, 262, 117, 'red');
//
//   //A2 Roads
//
//   drawRoad(412, 107, 438, 117, 'red');
//
//   drawRoad(450, 137, 450, 163, 'red');
//
//   drawRoad(438, 182, 412, 192, 'red');
//
//   drawRoad(388, 192, 362, 182, 'red');
//
//   drawRoad(388, 107, 362, 117, 'red');
//
//   //A3 Roads
//
//   drawRoad(512, 107, 538, 117, 'red');
//
//   drawRoad(550, 137, 550, 163, 'red');
//
//   drawRoad(538, 182, 512, 192, 'red');
//
//   drawRoad(488, 192, 462, 182, 'red');
//
//   drawRoad(488, 107, 462, 117, 'red');
//
//   //B1 Roads
//
//   drawRoad(300, 212, 300, 238, 'red');
//
//   drawRoad(288, 257, 262, 267, 'red');
//
//   drawRoad(238, 267, 212, 257, 'red');
//
//   drawRoad(200, 212, 200, 238, 'red');
//
//   drawRoad(238, 182, 212, 192, 'red');
//
//   //B2 Roads
//
//   drawRoad(400, 212, 400, 238, 'red');
//
//   drawRoad(388, 257, 362, 267, 'red');
//
//   drawRoad(338, 267, 312, 257, 'red');
//
//
//   //B3 Roads
//
//   drawRoad(500, 212, 500, 238, 'red');
//
//   drawRoad(488, 257, 462, 267, 'red');
//
//   drawRoad(438, 267, 412, 257, 'red');
//
//   //B4 Roads
//
//   drawRoad(562, 182, 588, 192, 'red');
//
//   drawRoad(600, 212, 600, 238, 'red');
//
//   drawRoad(588, 257, 562, 267, 'red');
//
//   drawRoad(538, 267, 512, 257, 'red');
//
//   //C1 Roads
//
//   drawRoad(250, 287, 250, 313, 'red');
//
//   drawRoad(238, 332, 212, 342, 'red');
//
//   drawRoad(188, 342, 162, 332, 'red');
//
//   drawRoad(150, 287, 150, 313, 'red');
//
//   drawRoad(188, 257, 162, 267, 'red');
//
//   //C2 Roads
//
//   drawRoad(350, 287, 350, 313, 'red');
//
//   drawRoad(338, 332, 312, 342, 'red');
//
//   drawRoad(288, 342, 262, 332, 'red');
//
//   //C3 Roads
//
//   drawRoad(450, 287, 450, 313, 'red');
//
//   drawRoad(438, 332, 412, 342, 'red');
//
//   drawRoad(388, 342, 362, 332, 'red');
//
//   //C3 Roads
//
//   drawRoad(550, 287, 550, 313, 'red');
//
//   drawRoad(538, 332, 512, 342, 'red');
//
//   drawRoad(488, 342, 462, 332, 'red');
//
//   //C5 Roads
//
//   drawRoad(612, 257, 638, 267, 'red');
//
//   drawRoad(650, 287, 650, 313, 'red');
//
//   drawRoad(638, 332, 612, 342, 'red');
//
//   drawRoad(588, 342, 562, 332, 'red');
//
//   //D1 Roads
//
//   drawRoad(300, 362, 300, 388, 'red');
//
//   drawRoad(288, 407, 262, 417, 'red');
//
//   drawRoad(238, 417, 212, 407, 'red');
//
//   drawRoad(200, 362, 200, 388, 'red');
//
//   drawRoad(238, 332, 212, 342, 'red');
//
//   //D2 Roads
//
//   drawRoad(400, 362, 400, 388, 'red');
//
//   drawRoad(388, 407, 362, 417, 'red');
//
//   drawRoad(338, 417, 312, 407, 'red');
//
//
//   //D3 Roads
//
//   drawRoad(500, 362, 500, 388, 'red');
//
//   drawRoad(488, 407, 462, 417, 'red');
//
//   drawRoad(438, 417, 412, 407, 'red');
//
//   //D4 Roads
//
//   drawRoad(562, 332, 588, 342, 'red');
//
//   drawRoad(600, 362, 600, 388, 'red');
//
//   drawRoad(588, 407, 562, 417, 'red');
//
//   drawRoad(538, 417, 512, 407, 'red');
//
//   //E1 Roads
//
//   drawRoad(350, 437, 350, 463, 'red');
//
//   drawRoad(338, 482, 312, 492, 'red');
//
//   drawRoad(288, 492, 262, 482, 'red');
//
//   drawRoad(250, 437, 250, 463, 'red');
//
//   //E2 Roads
//
//   drawRoad(450, 437, 450, 463, 'red');
//
//   drawRoad(438, 482, 412, 492, 'red');
//
//   drawRoad(388, 492, 362, 482, 'red');
//
//   //E3 Roads
//
//   drawRoad(550, 437, 550, 463, 'red');
//
//   drawRoad(538, 482, 512, 492, 'red');
//
//   drawRoad(488, 492, 462, 482, 'red');
//
// }());
