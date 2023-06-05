$(document).ready(function () {
    $("#pass2").on('keyup', function () {
        if($('#pass2').val().trim()==''){
            $('#pass2').removeClass('typed').addClass('empty');
            $('#result2').html('');
        }
     else if ($('#pass').val() == $('#pass2').val()) {  
        $('#pass2').removeClass('empty').addClass('typed');
        $('#result2').css('color', 'green');
        $('#result2').html('');
      }else {
       $('#pass2').removeClass('typed').addClass('empty');
       $('#result2').css('color', 'red');
       $('#result2').html('notmatching');
      }
      
    });
  });