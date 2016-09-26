$(document).ready(function() {
var socket = io();

  $('#roll-dice').on('click', function(e){
      e.preventDefault();
      var msg =
        socket.emit('roll dice');
    });
});
