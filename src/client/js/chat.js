$(document).ready(function() {

 var socket = io();
 // show modal for new user name input
$('#myModal').modal('show');


$('#chatForm').submit(function(e){
    e.preventDefault();
    var msg = $('#m').val();
    if (wantAGiphy(msg)) {
      grabFromGiphy(msg);
    } else {
      socket.emit('chat message', msg);
    }
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
  });

  // parse inputed string to check for /giphy match
  function wantAGiphy(str) {
    return str.trim().slice(0,6) === "/giphy";
  }

  // if not valid giphy tag, return error
  function logGiphyError() {
    $("#messages").append($('<li class="giphy-error">').text("Oops, it looks like Giphy couldn\'t match your search, or is having some other issue. Try again?"));
  }

  // get a random number for random giphy (see line 62)
  function getRandomNumber(max) {
    return Math.floor(Math.random()*max);
  }

  // find giphy image and send to all sockets
  function grabFromGiphy(msg) {
    $.ajax({
      method: 'GET',
      url: "http://api.giphy.com/v1/gifs/search?q="+encodeURIComponent(msg.trim().slice(7,msg.trim().length))+"&rating=g&api_key=dc6zaTOxFJmzC"
    }).done(function(result) {
      if (result.data.length) {
        var src = result.data[getRandomNumber(result.data.length)].images.downsized.url;
        socket.emit('giphy message', src);
      } else {
        logGiphyError();
      }
    }).fail(logGiphyError);
  }

  // add message to chat window
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
    $("#typing").text('');

    //scroll to bottom of message box on new message
    var height = 0;
    $('#messages li').each(function(i, value){
      height += parseInt($(this).height());
    });
    height += '';
    $('#messages').animate({scrollTop: height});
  });

  // add giphy to chat window
  socket.on('giphy message', function(msg){
    $('#messages').append(msg);
    $("#typing").text('');
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
      var el = $(this);
      if (el.text() === name) {
        $('#messages').append($('<li class="room-change">').text(name + ' has just left the chat. :('));
        el.remove();
        $("#typing").text('');
        return;
      }
    });
  });
});
