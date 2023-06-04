$(document).ready(function () {
   $("#email").on('keyup', function () { 
      if ($(this).val().trim() === '') {
        $(this).removeClass('typed').addClass('empty');
      } else {
        $(this).removeClass('empty').addClass('typed');
      }
 
    });
   
  


  if($(this).val().trim() === ''||$(this).val().trim()!==/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ){
    $('#resultt').css('color', 'red');
    $('#resultt').removeClass('typed').addClass('empty');
     $('#resultt').html('email' + ' is invalid.');
  } 
  else{
    $('#resultt').css('color', 'green');
    $('#resultt').removeClass('empty').addClass('typed'); 
    $('#resultt').html('email'+ ' is valid.');
  }
  }); 