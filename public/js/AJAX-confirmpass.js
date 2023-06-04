$(document).ready(function () {
    $("#pass2","#pass1").on('keyup', function () {
      if ($('#pass').val().trim() == $('#pass2').val().trim()) {  
        $('#pass2').removeClass('empty').addClass('typed');
      } else {
       $('#pass2').removeClass('typed').addClass('empty');
      }
      
    });
  });