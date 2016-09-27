const canvas = document.getElementById('hexmap');
const ctx = canvas.getContext('2d');

$('.findGame').on('click', function(e) {
  e.preventDefault();
  $(this).css('display', 'none');
  $('.canvas').css('display', 'block');
  $('.canvas2').css('display', 'block');
  $.ajax({
    url: '/play/gameBoard',
    data: {random: false}
  }).done((data) => {
    // console.log(data);
  });
});

// Row A
//A1
//create an image
function drawA1() {
  var img = new Image();
  img.src = 'images/ore.jpg';

  //draw the image when loaded
  img.onload = function(){
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
      //draw circle inside hexagon;
      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(300, 150, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(10, 289, 157);
      ctx.fill();

      ctx.restore();
  };
}

drawA1();

//A2

function drawA2() {
  var img = new Image();
  img.src = 'images/sheep.JPG';

  //draw the image when loaded
  img.onload = function(){
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
      //draw circle inside hexagon;
      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(400, 150, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(2, 393, 157);
      ctx.fill();

      ctx.restore();
  };
}

drawA2();

// //A3

function drawA3() {
  var img = new Image();
  img.src = 'images/lumber.jpg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(500, 150, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(9, 495, 157);
      ctx.fill();

      ctx.restore();
  };
}

drawA3();

// //Row B
//
// //B1
//

function drawB1() {
  var img = new Image();
  img.src = 'images/wheat.jpg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(250, 225, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(12, 238, 232);
      ctx.fill();

      ctx.restore();
  };
}

drawB1();

// //B2

function drawB2() {
  var img = new Image();
  img.src = 'images/brick.jpeg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(350, 225, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(6, 345, 232);
      ctx.fill();

      ctx.restore();
  };
}

drawB2();

// //B3

function drawB3() {
  var img = new Image();
  img.src = 'images/sheep.jpg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(450, 225, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(4, 445, 232);
      ctx.fill();

      ctx.restore();
  };
}

drawB3();

// //B4

function drawB4() {
  var img = new Image();
  img.src = 'images/brick.jpeg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(550, 225, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(10, 539, 232);
      ctx.fill();

      ctx.restore();
  };
}

drawB4();

// //Row C
//
// //C1

function drawC1() {
  var img = new Image();
  img.src = 'images/wheat.jpg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(200, 300, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(9, 195, 308);
      ctx.fill();

      ctx.restore();
  };
}

drawC1();

//
// //C2

function drawC2() {
  var img = new Image();
  img.src = 'images/lumber.jpg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(300, 300, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(11, 290, 308);
      ctx.fill();

      ctx.restore();
  };
}

drawC2();
//
// //C3

function drawC3() {
  var img = new Image();
  img.src = 'images/desert.jpg';

  //draw the image when loaded
  img.onload = function() {
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
  var img = new Image();
  img.src = 'images/lumber.jpg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(500, 300, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(3, 494, 308);
      ctx.fill();

      ctx.restore();
  };
}

drawC4();

// //C5

function drawC5() {
  var img = new Image();
  img.src = 'images/ore.jpg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(600, 300, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(8, 594, 308);
      ctx.fill();

      ctx.restore();
  };
}

drawC5();

// //Row D
//
// //D1

function drawD1() {
  var img = new Image();
  img.src = 'images/lumber.jpg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(250, 375, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(8, 244, 382);
      ctx.fill();

      ctx.restore();
  };
}

drawD1();

// //D2

function drawD2() {
  var img = new Image();
  img.src = 'images/ore.jpg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(350, 375, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(3, 344, 382);
      ctx.fill();

      ctx.restore();
  };
}

drawD2();

// //D3

function drawD3() {
  var img = new Image();
  img.src = 'images/wheat.jpg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(450, 375, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(4, 444, 382);
      ctx.fill();

      ctx.restore();
  };
}

drawD3();

// //D4

function drawD4() {
  var img = new Image();
  img.src = 'images/sheep.jpg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(550, 375, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(5, 544, 382);
      ctx.fill();

      ctx.restore();
  };
}

drawD4();

// //Row E
//
// //E1

function drawE1() {
  var img = new Image();
  img.src = 'images/brick.jpeg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(300, 450, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(5, 295, 458);
      ctx.fill();

      ctx.restore();
  };
}

drawE1();

// //E2

function drawE2() {
  var img = new Image();
  img.src = 'images/wheat.jpg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(400, 450, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(6, 395, 458);
      ctx.fill();

      ctx.restore();
  };
}

drawE2();

// //E3

function drawE3() {
  var img = new Image();
  img.src = 'images/sheep.jpg';

  //draw the image when loaded
  img.onload = function(){
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

      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(500, 450, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(11, 490, 457);
      ctx.fill();

      ctx.restore();
  };
}

drawE3();
