$(document).ready(function () {
    $("#pass").on('keyup', function () {
        if($(this).val().trim()==''){
            $(this).removeClass('typed').addClass('empty');
            $('#result1').html('');
        }
      else if ($(this).val().trim().length<8) {
        $(this).removeClass('typed').addClass('empty');
        $('#result1').css('color', 'red');
        $('#result1').html('small password');
      } else {
        $(this).removeClass('empty').addClass('typed');
        $('#result1').html('');
      }
 
    });
  });