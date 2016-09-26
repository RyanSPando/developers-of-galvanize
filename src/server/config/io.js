// connected in server/server.js
// var i = 0;

var users = [];

function init(io) {
  io.on('connection', function(socket) {

    socket.on('chat message', function(msg){
      var userIdx = findUserIndexBySocket(socket);
      var name = userIdx > -1 ? users[userIdx].name : 'anonymous';
      io.emit('chat message', `${name}: ${msg}`);
    });

    socket.on('giphy message', function(src) {
      var userIdx = findUserIndexBySocket(socket);
      var name = userIdx > -1 ? users[userIdx].name : 'anonymous';
      io.emit('giphy message', `${name}: <img src="${src}">`);
    });

    socket.on('join chat', function(msg) {
      users.push({name: msg, socketId: socket.id});
      io.emit('join chat', msg);
    });

    socket.on('typing', function(msg) {
      io.emit('typing', msg);
    });

    socket.on('disconnect', function(msg) {
      var userIdx = findUserIndexBySocket(socket);
      var disconnectedUser = users.splice(userIdx,1)[0];
      if (disconnectedUser) {
        io.emit('leave chat', disconnectedUser.name);
      }
    });

    socket.on('dice-roll', function() {
      const userIdx = findUserIndexBySocket(socket);
      const diceRoll = diceRoll();
      io.emit('dice-roll', diceRoll, users[userIdx].name);
    });
  });
}

function findUserIndexBySocket(socket) {
  return users.reduce(function(prev, cur, idx) {
    if (cur.socketId === socket.id) prev = idx;
    return prev;
  }, -1);
}

function diceRoll() {
  const dice1 = Math.ceiling(Math.random() * 6);
  const dice2 = Math.ceiling(Math.random() * 6);
  const total = dice1 + dice2;
  return [dice1, dice2, total];
}

module.exports = {
  init,
  findUserIndexBySocket
};
