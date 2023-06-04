$(document).ready(function () {
    $("#username").on('keyup', function (e) {
        e.preventDefault();
        var data = $('#username').val();
        $.ajax({
            url: '/rgestration/checkUN',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ UserName: data }),
            success: function (response) {
               
                    $('#result').html('UserName is ' + response);
                
                if ( ($('#username').val().trim() === '')||response == 'taken') {
                    $('#result').css("color", "red");
                    $('#username').removeClass('typed').addClass('empty');
                    $('#result').html('');
                }
                else {
                    $('#result').css("color", "green");
                    $('#username').removeClass('empty').addClass('typed');
                    }
                
            },
            error:function(err){

            }
        });
    });
});