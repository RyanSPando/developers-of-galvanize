function scrollChat() {
  //scroll to bottom of message box on new message
  var height = 0;
  $('#messages li').each(function(i, value) {
    height += parseInt($(this).height());
  });
  height += '';
  $('#messages').animate({scrollTop: height});
}
