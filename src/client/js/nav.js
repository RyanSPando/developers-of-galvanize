'use strict';

$('#sign-out').on('click', (e) => {
  e.preventDefault();
  const answer = confirm('Are you sure you want to logout?');
  if (answer) {
    $.ajax({
      url: '/logout',
      method: 'GET'
    }).done((data) => {
      document.location.href = '/';
    });
  }
});
