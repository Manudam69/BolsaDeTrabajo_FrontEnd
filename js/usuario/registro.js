$('#newUser').on("click", function () {
    var settings = {
        "url": "/signup",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            "name": $.trim($("#name").val()),
            "user": $.trim($("#user").val()),
            "email": $.trim($("#email").val()),
            "password": $.trim($("#contraseña").val())
        }
    };

    $.post(settings).done(function (response) {
        $(location).attr('href',"/login.html");
    }).fail(function (response) {
        $('#error-formulario').html("Por favor completa los campos faltantes");
        console.log(response.responseJSON)
        if(response.responseJSON.err.code == 11000)
            $('#error-formulario').html("Usuario o correo electrónico ya registrado");
    });
});
