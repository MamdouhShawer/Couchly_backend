$(document).ready(function() {
  $("#email").on('keyup', function() {
    const email = $(this).val().trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      $(this).removeClass('typed').addClass('empty');
      $('#resultt').html(' ');
    } else if (!regex.test(email)) {
      $(this).removeClass('typed').addClass('invalid');
      $('#resultt').html('Invalid email');
      
    } else {
      $(this).removeClass('empty invalid').addClass('typed');
      $('#resultt').html(' ');
    }
  });
});