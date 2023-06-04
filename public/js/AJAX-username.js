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
                if  ($('#username').val().trim() === '') {
                    $('#result').css("color", "red");
                    $('#username').removeClass('typed').addClass('empty');
                    
                }
                else if(response=='taken')
                {
                    $('#result').html('UserName is ' + response);
                }
                else {
                    $('#result').css("color", "green");
                    $('#username').removeClass('empty').addClass('typed');
                    $('#result').html('');
                    }
                
            },
            error:function(err){

            }
        });
    });
});