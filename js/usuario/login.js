var session = false;
$('#login-user').on("click", function () {
    console.log($("#user").val());
    var validar = {
        "url": "/is-validated",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "data": {
            "email": $.trim($("#user").val())
        }
    }
    $.post(validar).done(function (response) {
        if (response.validated) {
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
        } else {
            alert('Tienes que verificar tu cuenta con el email enviado a tu correo electronico');
        }
    });
});


$('#login-company').on("click", function () {
    var validarcomp = {
        "url": "/company-validated",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "data": {
            "email": $.trim($("#user-company").val())
        }
    }
    $.post(validarcomp).done(function (response) {
        if (response.validated) {
            var settingscomp = {
                "url": "/login-company",
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                "data": {
                    "email": $.trim($("#user-company").val()),
                    "password": $.trim($("#contraseña-company").val())
                }
            }
            $.post(settingscomp).done(function (response) {
                if (response.ok) {
                    session = true;
                    $(location).attr('href', "/");
                }
            });
        } else {
            alert('Tienes que verificar tu cuenta con el email enviado a tu correo electronico');
        }
    });
});
