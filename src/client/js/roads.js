(function() {

  const canvas = document.getElementById('hexmap2');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';

  function roadAngleDownLeft(x1, y1, x2, y2) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + 5, y1 + 5);
    ctx.lineTo(x2 + 5, y2 + 5);
    ctx.lineTo(x2, y2);
    // ctx.lineTo(x1, y1);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function roadAngleDownRight(x1, y1, x2, y2) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + 5, y1 - 5);
    ctx.lineTo(x2 + 5, y2 - 5);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function roadVertical(x1, y1, x2, y2) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x1, y2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  //A1 Roads

  roadAngleDownLeft(285, 103, 260, 118);

  roadAngleDownRight(310, 108, 335, 123);

  roadVertical(247, 137.5, 254, 162.5);

  roadVertical(347, 137.5, 354, 162.5);

  roadAngleDownLeft(335, 178, 310, 193);

  roadAngleDownRight(260, 182.5, 285, 197.5);

  //A2 Roads

  roadAngleDownLeft(385, 103, 360, 118);

  roadAngleDownRight(410, 108, 435, 123);

  roadVertical(447, 137.5, 454, 162.5);

  roadAngleDownLeft(435, 178, 410, 193);

  roadAngleDownRight(360, 182.5, 385, 197.5);

  //A3 Roads

  roadAngleDownLeft(485, 103, 460, 118);

  roadAngleDownRight(510, 108, 535, 123);

  roadVertical(547, 137.5, 554, 162.5);

  roadAngleDownLeft(535, 178, 510, 193);

  roadAngleDownRight(460, 182.5, 485, 197.5);

  //B1 Roads

  roadAngleDownLeft(235, 178, 210, 193);

  roadVertical(297, 212.5, 304, 237.5);

  roadAngleDownLeft(285, 253, 260, 268);

  roadVertical(197, 212.5, 204, 237.5);

  roadAngleDownRight(210, 257.5, 235, 272.5);

  //B2 Roads

  roadAngleDownLeft(385, 253, 360, 268);

  roadVertical(397, 212.5, 404, 237.5);

  roadAngleDownRight(310, 257.5, 335, 272.5);

  //B3 Roads

  roadAngleDownLeft(485, 253, 460, 268);

  roadVertical(497, 212.5, 504, 237.5);

  roadAngleDownRight(410, 257.5, 435, 272.5);

  //B4 Roads

  roadAngleDownRight(560, 182.5, 585, 197.5);

  roadAngleDownLeft(585, 253, 560, 268);

  roadVertical(597, 212.5, 604, 237.5);

  roadAngleDownRight(510, 257.5, 535, 272.5);

  //C1 Roads

  roadAngleDownLeft(185, 253, 160, 268);

  roadVertical(247, 287.5, 254, 312.5);

  roadAngleDownLeft(235, 328, 210, 343);

  roadVertical(147, 287.5, 154, 312.5);

  roadAngleDownRight(160, 332.5, 185, 347.5);

  //C2 Roads

  roadAngleDownLeft(335, 328, 310, 343);

  roadVertical(347, 287.5, 354, 312.5);

  roadAngleDownRight(260, 332.5, 285, 347.5);

  //C3 Roads

  roadAngleDownLeft(435, 328, 410, 343);

  roadVertical(447, 287.5, 454, 312.5);

  roadAngleDownRight(360, 332.5, 385, 347.5);

  //C4 Roads

  roadAngleDownLeft(535, 328, 510, 343);

  roadVertical(547, 287.5, 554, 312.5);

  roadAngleDownRight(460, 332.5, 485, 347.5);

  //C5 Roads

  roadAngleDownRight(610, 257.5, 635, 272.5);

  roadAngleDownLeft(635, 328, 610, 343);

  roadVertical(647, 287.5, 654, 312.5);

  roadAngleDownRight(560, 332.5, 585, 347.5);

  //D1 Roads

  roadVertical(297, 362.5, 304, 387.5);

  roadAngleDownLeft(285, 403, 260, 418);

  roadVertical(197, 362.5, 204, 387.5);

  roadAngleDownRight(210, 407.5, 235, 422.5);

  //D2 Roads

  roadAngleDownLeft(385, 403, 360, 418);

  roadVertical(397, 362.5, 404, 387.5);

  roadAngleDownRight(310, 407.5, 335, 422.5);

  //D3 Roads

  roadAngleDownLeft(485, 403, 460, 418);

  roadVertical(497, 362.5, 504, 387.5);

  roadAngleDownRight(410, 407.5, 435, 422.5);

  //D4 Roads

  roadAngleDownRight(560, 182.5, 585, 197.5);

  roadAngleDownLeft(585, 403, 560, 418);

  roadVertical(597, 362.5, 604, 387.5);

  roadAngleDownRight(510, 407.5, 535, 422.5);

  //E1 Roads

  roadVertical(247, 437.5, 254, 462.5);

  roadVertical(347, 437.5, 354, 462.5);

  roadAngleDownLeft(335, 478, 310, 493);

  roadAngleDownRight(260, 482.5, 285, 497.5);

  //E2 Roads

  roadVertical(447, 437.5, 454, 462.5);

  roadAngleDownLeft(435, 478, 410, 493);

  roadAngleDownRight(360, 482.5, 385, 497.5);

  //E3 Roads

  roadVertical(547, 437.5, 554, 462.5);

  roadAngleDownLeft(535, 478, 510, 493);

  roadAngleDownRight(460, 482.5, 485, 497.5);

}());
