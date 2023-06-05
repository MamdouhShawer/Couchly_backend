$(document).ready(function () {
$("#search").on('keyup', function (e) {
  e.preventDefault();
  console.log("listning");
  var data = $('#search').val();
  $.ajax({
      url: '/index/searchProduct',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({search: data}),
      success: function (response) {
          if  ($('#search').val().trim() === '') {
              $('#result').css("color", "red");
          }
          else if(response=='taken')
          {
              $('#result').html('UserName is ' + response);
              $('#result').css("color", "red");
          }
          else {
            $('#result').html('UserName is ' + response);
              $('#result').css("color", "green");
              }
      },
      error:function(err){
        console.log('error');
      }
  });
 });
});