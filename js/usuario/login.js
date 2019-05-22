var session = false;
$('#login').on("click", function () {
    var settings = {
        "url": "/login",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "data": {
            "user": $.trim($("#user").val()),
            "password": $.trim($("#contraseña").val())
        }
    }
    $.post(settings).done(function (response) {
        if(response.ok){
            session = true;
            $(location).attr('href', "/");
        }
    });
});
