const canvas = document.getElementById('hexmap');
const ctx = canvas.getContext('2d');
const canvas2 = document.getElementById('hexmap2');
const ctx2 = canvas2.getContext('2d');
var board = null;

$('.ready').on('click', function(e) {
  e.preventDefault();
  $(this).css('display', 'none');
  $('.canvas-contain').css('display', 'block');
  var pathname = window.location.pathname.split('/');
  var boardID = pathname[pathname.length - 1];
  $.ajax({
    url: `/play/${boardID}/join`,
    data: {id: boardID}
  }).done((boardInfo) => {
    board = boardInfo;
    Object.keys(boardInfo).forEach((tile) => {
      if (tile !== 'id' && tile !== 'allVertices' && tile !== 'allEdges' && tile !== 'allEdgeEndPoints') drawBoard(board[tile]);
    });
  });
});

$(document).on('click', '#hexmap2', function(e) {
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;
  const settleCoords = board.allVertices.filter((vertex) => {
    const x = vertex[0];
    const y = vertex[1];
    return Math.sqrt((x - mouseX) * (x - mouseX) + (y - mouseY) * (y - mouseY)) < 11;
  });
  var roadIndex = null;
  board.allEdges.forEach((edge, index) => {
    const x = edge[0];
    const y = edge[1];
    if (Math.sqrt((x - mouseX) * (x - mouseX) + (y - mouseY) * (y - mouseY)) < 11) {
      roadIndex = index;
    }
  });
  const robberCoords = Object.keys(board).filter((tile) => {
    const x = board[tile].x + 50;
    const y = board[tile].y + 25;
    var result = false;
    if (tile !== 'id' && tile !== 'allVertices' && tile !== 'allEdges') {
      if (Math.sqrt((x - mouseX) * (x - mouseX) + (y - mouseY) * (y - mouseY)) < 11) result = [x, y];
    }
    return result;
  });
  if (settleCoords.length) {
    var newSettlement = new SettlementSquare(settleCoords[0][0] - 10, settleCoords[0][1] - 10, 20, 20, '#333');
    newSettlement.draw(ctx2);
  } else if (roadIndex !== null) {
    drawRoad(board.allEdgeEndPoints[roadIndex][0], board.allEdgeEndPoints[roadIndex][1], board.allEdgeEndPoints[roadIndex][2], board.allEdgeEndPoints[roadIndex][3], 'red', ctx2);
  } else if (robberCoords) {
    var robber = new Image();
    robber.onload = function(){
      ctx2.drawImage(robber, board[robberCoords].x + 25, board[robberCoords].y, 50, 50);
    };
    robber.src = `https://raw.githubusercontent.com/pittdogg/developers-of-galvanize/master/src/client/images/robber.jpg`;

  }
})

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
      ctx.fillStyle = 'black';
      ctx.font = '20px Helvetica';
      ctx.fillText(tile.roll, tile.x + 39, tile.y + 32);
      ctx.fill();
      ctx.closePath();
    } else {
      var robber = new Image();
      robber.onload = function(){
        ctx2.drawImage(robber, tile.x + 25, tile.y, 50, 50);
      };
      robber.src = `https://raw.githubusercontent.com/pittdogg/developers-of-galvanize/master/src/client/images/robber.jpg`;
    }
    ctx.restore();
  };
  img.src = `https://raw.githubusercontent.com/pittdogg/developers-of-galvanize/master/src/client/images/${tile.type}.jpg`;
}
