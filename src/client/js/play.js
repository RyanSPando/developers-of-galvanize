const canvas = document.getElementById('hexmap');
const ctx = canvas.getContext('2d');
const canvas2 = document.getElementById('hexmap2');
const ctx2 = canvas2.getContext('2d');

$('.ready').on('click', function(e) {
  e.preventDefault();
  $(this).css('display', 'none');
  $('.canvas-contain').css('display', 'block');
  var pathname = window.location.pathname.split('/');
  var boardID = pathname[pathname.length - 1];
  $.ajax({
    url: `/play/${boardID}/join`,
    data: {id: boardID}
  }).done((data) => {
    Object.keys(data).forEach((tile) => {
      if (tile !== 'id') drawBoard(data[tile]);
    });
  });
});

function drawBoard(tile) {
  var img = new Image();
  //draw the image when loaded
  img.onload = function(){
    ctx.save();

    //define the polygon
    ctx.beginPath();
    ctx.moveTo(tile.x, tile.y);
    for (let i = 1; i < tile.vertices.length; i++) {ctx.lineTo(tile.vertices[i][0], tile.vertices[i][1]);}
    ctx.lineTo(tile.x, tile.y);
    ctx.closePath();

    //draw the image
    ctx.clip();

    switch (tile.type) {
      case 'lumber':
        ctx.drawImage(img, tile.x, tile.y - 25, 100, 200);
        break;
      case 'brick':
        ctx.drawImage(img, tile.x, tile.y - 25, 175, 100);
        break;
      case 'desert':
        ctx.drawImage(img, tile.x, tile.y - 25, 150, 100);
        break;
      default:
        ctx.drawImage(img, tile.x, tile.y - 25, 100, 100);
    }

    //fill and stroke are still available for overlays and borders
    ctx.stroke();
    if (tile.roll !== null) {
      //draw circle inside hexagon;
      ctx.beginPath();
      ctx.fillStyle = 'burlywood';
      ctx.arc(tile.x + 50, tile.y + 25, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.fillStyle = 'black'
      ctx.font = '20px Helvetica';
      ctx.fillText(tile.roll, tile.x + 39, tile.y + 32);
      ctx.fill();
      ctx.closePath();
    } else {
      var robber = new Image();
      robber.onload = function(){
        ctx2.drawImage(robber, tile.x + 25, tile.y, 50, 50);
      }
      robber.src = `https://raw.githubusercontent.com/pittdogg/developers-of-galvanize/master/src/client/images/robber.jpg`;
    }
    ctx.restore();
  };
  img.src = `https://raw.githubusercontent.com/pittdogg/developers-of-galvanize/master/src/client/images/${tile.type}.jpg`;
};
