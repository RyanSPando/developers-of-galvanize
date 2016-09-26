//
// var ctx = canvas.getContext("2d");
//
// ctx.fillStyle = 'white';

//every hex drawn left to right within row, each row drawn vertically from top to bottom

// Row A

//A1

//create an image
function drawA1() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/ore.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(250, 175);
      ctx.lineTo(250, 125);
      ctx.lineTo(300, 100);
      ctx.lineTo(350, 125);
      ctx.lineTo(350, 175);
      ctx.lineTo(300, 200);
      ctx.lineTo(250, 175);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 250, 100, 100, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawA1();

//A2

function drawA2() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/sheep.JPG';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(350, 175);
      ctx.lineTo(350, 125);
      ctx.lineTo(400, 100);
      ctx.lineTo(450, 125);
      ctx.lineTo(450, 175);
      ctx.lineTo(400, 200);
      ctx.lineTo(350, 175);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 350, 100, 100, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawA2();


// //A3

function drawA3() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/forest.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(450, 125);
      ctx.lineTo(500, 100);
      ctx.lineTo(550, 125);
      ctx.lineTo(550, 175);
      ctx.lineTo(500, 200);
      ctx.lineTo(450, 175);
      ctx.lineTo(450, 125);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 450, 100, 100, 200);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawA3();


// //Row B
//
// //B1
//

function drawB1() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/wheat.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(200, 250);
      ctx.lineTo(200, 200);
      ctx.lineTo(250, 175);
      ctx.lineTo(300, 200);
      ctx.lineTo(300, 250);
      ctx.lineTo(250, 275);
      ctx.lineTo(200, 250);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 200, 175, 100, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawB1();

// //B2

function drawB2() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/bricks.jpeg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(300, 250);
      ctx.lineTo(300, 200);
      ctx.lineTo(350, 175);
      ctx.lineTo(400, 200);
      ctx.lineTo(400, 250);
      ctx.lineTo(350, 275);
      ctx.lineTo(300, 250);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 300, 175, 175, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawB2();

// //B3

function drawB3() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/sheep.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(400, 250);
      ctx.lineTo(400, 200);
      ctx.lineTo(450, 175);
      ctx.lineTo(500, 200);
      ctx.lineTo(500, 250);
      ctx.lineTo(450, 275);
      ctx.lineTo(400, 250);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 400, 175, 100, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawB3();

// //B4

function drawB4() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/bricks.jpeg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(550, 175);
      ctx.lineTo(600, 200);
      ctx.lineTo(600, 250);
      ctx.lineTo(550, 275);
      ctx.lineTo(500, 250);
      ctx.lineTo(500, 200);
      ctx.lineTo(550, 175);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 500, 175, 175, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawB4();

// //Row C
//
// //C1

function drawC1() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/wheat.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(200, 350);
      ctx.lineTo(150, 325);
      ctx.lineTo(150, 275);
      ctx.lineTo(200, 250);
      ctx.lineTo(250, 275);
      ctx.lineTo(250, 325);
      ctx.lineTo(200, 350);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 150, 250, 100, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawC1();

//
// //C2

function drawC2() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/forest.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(300, 350);
      ctx.lineTo(250, 325);
      ctx.lineTo(250, 275);
      ctx.lineTo(300, 250);
      ctx.lineTo(350, 275);
      ctx.lineTo(350, 325);
      ctx.lineTo(300, 350);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 250, 250, 100, 200);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawC2();
//
// //C3

function drawC3() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/desert.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(400, 250);
      ctx.lineTo(450, 275);
      ctx.lineTo(450, 325);
      ctx.lineTo(400, 350);
      ctx.lineTo(350, 325);
      ctx.lineTo(350, 275);
      ctx.lineTo(400, 250);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 350, 250, 150, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawC3();

// //C4

function drawC4() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/forest.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(500, 250);
      ctx.lineTo(550, 275);
      ctx.lineTo(550, 325);
      ctx.lineTo(500, 350);
      ctx.lineTo(450, 325);
      ctx.lineTo(450, 275);
      ctx.lineTo(500, 250);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 450, 250, 100, 200);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawC4();

// //C5

function drawC5() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/ore.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(600, 250);
      ctx.lineTo(650, 275);
      ctx.lineTo(650, 325);
      ctx.lineTo(600, 350);
      ctx.lineTo(550, 325);
      ctx.lineTo(550, 275);
      ctx.lineTo(600, 250);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 550, 250, 100, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawC5();

// //Row D
//
// //D1

function drawD1() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/forest.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(250, 425);
      ctx.lineTo(200, 400);
      ctx.lineTo(200, 350);
      ctx.lineTo(250, 325);
      ctx.lineTo(300, 350);
      ctx.lineTo(300, 400);
      ctx.lineTo(250, 425);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 200, 325, 100, 200);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawD1();

// //D2

function drawD2() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/ore.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(400, 400);
      ctx.lineTo(350, 425);
      ctx.lineTo(300, 400);
      ctx.lineTo(300, 350);
      ctx.lineTo(350, 325);
      ctx.lineTo(400, 350);
      ctx.lineTo(400, 400);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 300, 325, 100, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawD2();

// //D3

function drawD3() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/wheat.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(500, 350);
      ctx.lineTo(500, 400);
      ctx.lineTo(450, 425);
      ctx.lineTo(400, 400);
      ctx.lineTo(400, 350);
      ctx.lineTo(450, 325);
      ctx.lineTo(500, 350);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 400, 325, 100, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawD3();

// //D4

function drawD4() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/sheep.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(600, 350);
      ctx.lineTo(600, 400);
      ctx.lineTo(550, 425);
      ctx.lineTo(500, 400);
      ctx.lineTo(500, 350);
      ctx.lineTo(550, 325);
      ctx.lineTo(600, 350);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 500, 325, 100, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawD4();

// //Row E
//
// //E1

function drawE1() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/bricks.jpeg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(350, 475);
      ctx.lineTo(300, 500);
      ctx.lineTo(250, 475);
      ctx.lineTo(250, 425);
      ctx.lineTo(300, 400);
      ctx.lineTo(350, 425);
      ctx.lineTo(350, 475);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 250, 400, 175, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawE1();

// //E2

function drawE2() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/wheat.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(450, 475);
      ctx.lineTo(400, 500);
      ctx.lineTo(350, 475);
      ctx.lineTo(350, 425);
      ctx.lineTo(400, 400);
      ctx.lineTo(450, 425);
      ctx.lineTo(450, 475);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 350, 400, 100, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawE2();

// //E3

function drawE3() {
  var canvas = document.getElementById('hexmap');
  var img = new Image();
  img.src = 'images/sheep.jpg';

  //draw the image when loaded
  img.onload = function(){
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.save();

      //define the polygon
      ctx.beginPath();
      ctx.moveTo(550, 425);
      ctx.lineTo(550, 475);
      ctx.lineTo(500, 500);
      ctx.lineTo(450, 475);
      ctx.lineTo(450, 425);
      ctx.lineTo(500, 400);
      ctx.lineTo(550, 425);
      ctx.closePath();

      //draw the image
      ctx.clip();
      ctx.drawImage(img, 450, 400, 100, 100);

      //fill and stroke are still available for overlays and borders
      ctx.stroke();

      ctx.restore();
  };
}

drawE3();
