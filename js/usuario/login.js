var session = false;
$('#login').on("click", function () {
    var validar = {
        "url": "/is-validated",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "data": {
            "user": $.trim($("#user").val())
        }
    }
    $.post(validar).done(function(response) {
    if (response.validated){
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
            if (response.ok) {
                session = true;
                $(location).attr('href', "/");
            }
        });
    }else{
        alert('Tienes que verificar tu cuenta con el email enviado a tu correo electronico');
    }
    });
});
