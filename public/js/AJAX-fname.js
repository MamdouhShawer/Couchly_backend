$(document).ready(function () {
    $("#firstname").on('keyup', function () {
      if ($(this).val().trim() === '') {
        $(this).removeClass('typed').addClass('empty');
      } else {
        $(this).removeClass('empty').addClass('typed');
      }
 
    });
  });