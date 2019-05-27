var session = false;
$('#login').on("click", function () {
    var validarUsuario = {
        "url": "/is-validated",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "data": {
            "email": $.trim($("#user").val())
        }
    }
    var validarComp = {
        "url": "/company-validated",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "data": {
            "email": $.trim($("#user").val())
        }
    }

    $.post(validarComp).done(function(response) {
        if (response.validated){
            var settings = {
                "url": "/login-company",
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                "data": {
                    "email": $.trim($("#user").val()),
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

    $.post(validarUsuario).done(function(response) {
        if (response.validated){
            var settings = {
                "url": "/login",
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                "data": {
                    "email": $.trim($("#user").val()),
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
