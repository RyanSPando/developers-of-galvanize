// $(document).ready(function() {
//   var socket = require(''); // jshint ignore:line
//   const bool = $('#myData').data('first');
//   console.log(bool);
//   if (bool) {
//     enableButtons();
//   }
//
//   //ask for a dice roll
//   $('#roll-dice-form').on('submit', (e) => {
//     e.preventDefault();
//     const socketId = $('#myData').data('id');
//     socket.emit('dice-roll', socketId);
//   });
//
//   $('#next-turn-form').on('submit', (e) => {
//     e.preventDefault();
//     const socketId = $('#myData').data('id');
//     disableButtons();
//     socket.emit('next-turn', socketId);
//   });
//
  //display dice roll in chat with the name of the person who requested it
//   socket.on('dice-roll', (diceArray, name) => {
//     $('#messages').append($('<li>').text(`${name} just rolled a ${diceArray[0]} and ${diceArray[1]} for a total of ${diceArray[2]}`));
//     scrollChat(); // jshint ignore:line
//   });
// });
