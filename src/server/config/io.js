const users = [];
var masterIDx = masterIDx || 0;
var round = 0;

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
        io.sockets.connected[socketId].emit('your-phase');
      }
    });

    socket.on('typing', function(msg) {
      io.emit('typing', msg);
    });

    // socket.on('disconnect', function(msg) {
    //   var userIdx = findUserIndexBySocket(socket);
    //   var disconnectedUser = users.splice(userIdx,1)[0];
    //   if (disconnectedUser) {
    //     io.emit('leave chat', disconnectedUser.name);
    //   }
    // });

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

    socket.on('next-place-phase', function(sessionID) {
      if (checkUser(sessionID, masterIDx)) {
        console.log('current round', round);
        let nextMasterIndex;
        // go through normal turn order on round 1
        if (round === 0) {
           nextMasterIndex = (findUserIndexBySession(sessionID) + 1);
          if(nextMasterIndex === (users.length - 1)) {
            round += 1;
          }
          masterIDx = nextMasterIndex;
          let name = users[nextMasterIndex].name;
          let socketId = users[nextMasterIndex].socketId;
          io.emit('next-place-phase', name);
          io.sockets.connected[socketId].emit('your-phase');
        }
        //go through reverse order on turn 2
        else if (round === 1) {
          nextMasterIndex = (findUserIndexBySession(sessionID) - 1);
          console.log('inside round 1', nextMasterIndex);
          //go to normal turns if second phase complete
         if (nextMasterIndex === -1) {
           masterIDx = 0;
           round += 1;
           let name = users[masterIDx].name;
           let socketId = users[masterIDx].socketId;
           io.emit('next-turn', name);
           io.sockets.connected[socketId].emit('your-turn');
         }
         else {
           nextMasterIndex = masterIDx;
           let name = users[nextMasterIndex].name;
           let socketId = users[nextMasterIndex].socketId;
           io.emit('next-place-phase', name);
           io.sockets.connected[socketId].emit('your-phase');
         }
        }
      }
    });
  });
}
//finds index of user in array by their socket
function findUserIndexBySocket(socket) {
  return users.map(function(value, idx) {
    return value.socketId;
  }).indexOf(socket);
}

function findUserIndexBySession(sessionID) {
  return users.map((value, idx) => {
    return value.sessionID;
  }).indexOf(sessionID);
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
      // io.sockets.connected[user.socketId].emit('chat message',`${user.name} only received this message`);
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
