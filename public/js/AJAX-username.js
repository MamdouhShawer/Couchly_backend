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

                if (response == 'taken') {
                    $('#result').css("color", "red");
                    $(this).removeClass('typed').addClass('empty');
                }
                else {
                    $('#result').css("color", "green");
                    $(this).removeClass('empty').addClass('typed');
                }
            },
            error:function(err){

            }
        });
    });
});