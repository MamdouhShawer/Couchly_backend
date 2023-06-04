$(document).ready(function () {
    $("#pass").on('keyup', function () {
      const regexp = /^[A-Z]/;
        if($(this).val().trim()==''){
            $(this).removeClass('typed').addClass('empty');
            $('#result1').html('');
            $('#result11').html('');
        }
      else if ($(this).val().trim().length<8 &&(!regexp.test($(this).val().trim()))) {
        $(this).removeClass('typed').addClass('empty');
        $('#result1').css('color', 'red');
        $('#result11').css('color', 'red');
        $('#result1').html('small password'); 
        $('#result11').html('First letter must be uppercase');
      }
       else if ($(this).val().trim().length<8) {
        $(this).removeClass('typed').addClass('empty');
        $('#result1').html('small password');
        $('#result11').html('');
      }
      else if(!regexp.test($(this).val().trim())){
        $(this).removeClass('typed').addClass('empty');
        $('#result11').html('First letter must be uppercase');
        $('#result1').html('');
      }
      else{
        $(this).removeClass('empty').addClass('typed');
        $('#result1').html('');
        $('#result11').html('');
      }
      
    });
  });