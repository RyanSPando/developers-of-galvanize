$(document).ready(function() {

 var socket = io();
 // show modal for new user name input
$('#myModal').modal('show');

$('#chatForm').submit(function(e){
    e.preventDefault();
    var msg = $('#m').val();
    socket.emit('chat message', msg);

    // reset form value to nothing
    $('#m').val('');
    // reset 'typing' to nothing
    $("#typing").text('');
  });

  // set listener for chat form when enter/return key released
  $('#chatForm').on('keyup', function(e) {
    if (e.keyCode !== 13) {
      // display to all users who is currently typing
      socket.emit('typing', $('#username').val());
    }
  });

  // send new user's name to server side and hide modal
  $('#nameForm').submit(function() {
    var name = $('#username').val() || 'anonymous';
    $('#username').val(name);
    socket.emit('join chat', name);
    $('#myModal').modal('hide');
    $('#myName').val(name); 
  });

  // add message to chat window
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
    $("#typing").text('');
    scrollChat();
  });

  // display name of current typing user
  socket.on('typing', function(msg) {
    $('#typing').text(msg + " is typing...");
  });

  // display name of user that has joined room
  socket.on('join chat', function(msg) {
    $('#messages').append($('<li class="room-change">').text(msg + ' has just joined the chat!'));
  });

  // display name of user when their socket closes
  socket.on('leave chat', function(name) {
    $('#users li').each(function() {
      var $el = $(this);
      if ($el.text() === name) {
        $('#messages').append($('<li class="room-change">').text(name + ' has just left the chat. :('));
        $el.remove();
        $("#typing").text('');
        return;
      }
    });
  });
});
