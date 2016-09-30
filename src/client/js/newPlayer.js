$(document).ready(function() {

  // show modal for new user color and avatar
  $('#myModal').modal('show');

  $('#new-player-form').submit(function(e) {
    e.preventDefault();
    const string = $('#avatar_url').val();
    grabFromGiphy(string);
    $('#myModal').modal('hide');
  });
});

function grabFromGiphy(string) {
  $.ajax({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/search?q=' + encodeURIComponent(string.trim()) + '&rating=g&api_key=dc6zaTOxFJmzC'
  })
  .done(function(result) {
    var avatar_url;
    if (!result.data.length) avatar_url = 'https://media.giphy.com/media/SxthdSyeTcbRK/giphy.gif';
    else avatar_url = result.data[getRandomNumber(result.data.length)].images.downsized.url;
    const pathname = window.location.pathname.split('/');
    const game_id = pathname[2];
    const color = $('#color').val();

    $.ajax({
      url: `/play/player/new`,
      method: 'POST',
      data: {avatar_url: avatar_url, game_id: game_id, color: color }
    }).done((playerInfo) => {
      console.log(playerInfo);
      $('.wheat').append(`<h1>${playerInfo.wheat_cards}</h1>`);
      $('.lumber').append(`<h1>${playerInfo.wood_cards}</h1>`);
      $('.ore').append(`<h1>${playerInfo.ore_cards}</h1`);
      $('.sheep').append(`<h1>${playerInfo.sheep_cards}</h1>`);
      $('.brick').append(`<h1>${playerInfo.brick_cards}</h1>`);
    });

    if (!result.data.length) {
      $('#messages').append($('<li class="giphy-error">').text('Oops, it looks like Giphy couldn\'t match your search, or is having some other issue.'));
    }
  }).fail('Could not load Avatar');

}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
