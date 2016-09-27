$(document).ready(function() {
  var socket = io(); // jshint ignore:line
  const bool = $('#myData').data('first');
  if (bool) {
    enableButtons();
  }

  //ask for a dice roll
  $('#roll-dice-form').on('submit', (e) => {
    e.preventDefault();
    const socketId = $('#myData').data('id');
    socket.emit('dice-roll', socketId);
  });

  $('#next-turn').on('submit', (e) => {
    e.preventDefault();
    const socketId = $('#myData').data('id');
    disableButtons();
    socket.emit('next-turn', socketId);
  });

  //display dice roll in chat with the name of the person who requested it
  socket.on('dice-roll', (diceArray, name) => {
    $('#messages').append($('<li>').text(`${name} just rolled a ${diceArray[0]} and ${diceArray[1]} for a total of ${diceArray[2]}`));
    scrollChat(); // jshint ignore:line
  });

  socket.on('your-turn', (name) => {
    enableButtons();
    $('#messages').append($('<li>').text(`It is now ${name}'s turn.`));
    scrollChat(); // jshint ignore:line
  });

});

function enableButtons() {
  $('#roll-dice').removeProp('disabled');
  $('#next-turn').removeProp('disabled');
  $('#trade-bank').removeProp('disabled');
  $('#trade-players').removeProp('disabled');
}

function disableButtons() {
  $('#roll-dice').prop('disabled', true);
  $('#next-turn').prop('disabled', true);
  $('#trade-bank').prop('disabled', true);
  $('#trade-players').prop('disabled', true);
}
