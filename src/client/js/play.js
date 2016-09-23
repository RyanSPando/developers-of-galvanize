(function () {

  'use strict';

  // initialize io on the frontend
  var socket = io();
  // console.log(socket);
  $('#chatInput').on('submit', (e) => {
    e.preventDefault();
    var msg = $('m').val();
    console.log(msg);
    socket.emit('message', msg);
    // reset form value to nothing
    $('#m').val('');
  });
})();
