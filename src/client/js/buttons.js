$(document).ready(function() {
  var socket = io();

  //ask for a dice roll
  $('#roll-dice-form').on('submit', (e) => {
      e.preventDefault();
      const name = $('#myName').val();
      socket.emit('dice-roll', name);

    });

  //display dice roll in chat with the name of the person who requested it
  socket.on('dice-roll', (diceArray, name) => {
    $('#messages').append($('<li>').text(`${name} just rolled a ${diceArray[0]} and ${diceArray[1]} for a total of ${diceArray[2]}`));
    scrollChat();
  });
});
