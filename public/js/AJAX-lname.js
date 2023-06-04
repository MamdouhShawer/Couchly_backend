$(document).ready(function () {
    $("#last").on('keyup', function () {
      if ($(this).val().trim() === '') {
        $(this).removeClass('typed').addClass('empty');
      } else {
        $(this).removeClass('empty').addClass('typed');
      }
 
    });
  });