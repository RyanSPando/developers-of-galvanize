// connected in server/server.js
// var i = 0;

function init(io) {
  io.on('connection', function(socket) {
    console.log('someone joined');
    socket.emit('message', 'yo!');
    socket.on('message', function(msg) {
      console.log(msg);
    });
  });
}
