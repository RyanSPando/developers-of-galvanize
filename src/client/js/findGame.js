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

$('.findGame').on('click', function(e) {
  e.preventDefault();
  $(this).css('display', 'none');
  $('.createGame').css('display', 'none');
  $.ajax({
    url: '/play/findGame'
  }).done((games) => {
    for (let i = 0; i < games.length; i++) {
      $('#gameList').append(`<li class="games-available"><a href="/play/${games[i].gameID}/notFirst" class="btn btn-lg">Game #${i + 1}</a></li>`);
    }
  });
});
