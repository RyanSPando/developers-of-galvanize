const users = [];
var masterIDx = masterIDx || 0;

function init(io) {
  io.on('connection', function(socket) {

    socket.on('chat message', function(msg) {
      var userIdx = findUserIndexBySocket(socket);
      var name = userIdx > -1 ? users[userIdx].name : 'anonymous';
      io.emit('chat message', `${name}: ${msg}`);
    });

    socket.on('join chat', function(msg, sessionID) {
      users.push({name: msg, socketId: socket.id, sessionID: sessionID});
      io.emit('join chat', msg);
      if (users.length > 1) {
        const socketId = users[0].socketId;
        io.emit('start-game');
        io.sockets.connected[socketId].emit('your-place-phase');
      }
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

    socket.on('dice-roll', function(sessionID) {
      if (checkUser(sessionID, masterIDx)) {
        const userIdx = findUserIndexBySession(sessionID);
        const name = users[userIdx].name;
        const diceResult = diceRoll();
        resolveDiceRoll(diceResult, io, socket, users);
        io.emit('dice-roll', diceResult, name);
      }
    });

    socket.on('next-turn', function(sessionID) {
      if (checkUser(sessionID, masterIDx)) {
        const nextMasterIndex = (findUserIndexBySession(sessionID) + 1) % (users.length);
        masterIDx = nextMasterIndex;
        const name = users[nextMasterIndex].name;
        const socketId = users[nextMasterIndex].socketId;
        io.emit('next-turn', name);
        io.sockets.connected[socketId].emit('your-turn');
      }
    });

    socket.on('your-place-phase', function(sessionID) {
      console.log('hello it\'s your place phase');
    });
  });
}
//finds index of user in array by their socket
function findUserIndexBySocket(socket) {
  return users.reduce(function(prev, cur, idx) {
    if (cur.socketId === socket.id) prev = idx;
    return prev;
  }, -1);
}

function findUserIndexBySession(sessionID) {
  return users.reduce((prev, cur, idx) => {
    if (cur.sessionID === sessionID) prev = idx;
    return prev;
  }, -1);
}
//return an array with two six sided dice rolls in position 0 and 1 and their total in position 2.
function diceRoll() {
  const dice1 = Math.ceil(Math.random() * 6);
  const dice2 = Math.ceil(Math.random() * 6);
  const total = dice1 + dice2;
  return [dice1, dice2, total];
}

function resolveDiceRoll(diceResult, io, socket, users) {

  if (diceRoll) {
    users.forEach((user) => {
      io.sockets.connected[user.socketId].emit('chat message',`${user.name} only received this message`);
    });
  }
}

function checkUser(sessID, storedIdx) {
  if (storedIdx === undefined) {
    return false;
  }
  if (sessID === users[storedIdx].sessionID) return true;
  return false;
}

module.exports = {
  init
};
