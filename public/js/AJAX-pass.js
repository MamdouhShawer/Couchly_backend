$(document).ready(function () {
    $("#pass").on('keyup', function () {
      if ($(this).val().trim() === ''||$(this).val().trim().length<8) {
        $(this).removeClass('typed').addClass('empty');
      } else {
        $(this).removeClass('empty').addClass('typed');
      }
 
    });
  });