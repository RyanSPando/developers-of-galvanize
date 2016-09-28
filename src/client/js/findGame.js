$('.createGame').on('click', function(e) {
  e.preventDefault();
  console.log('hit');
  $.ajax({
    method: 'POST',
    url: '/play/gameBoard',
    data: {random: true}
  }).done((data) => {
    window.location.replace(`/play/${data.id}`);
  });
});
