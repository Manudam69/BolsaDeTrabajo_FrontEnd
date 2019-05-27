var session = false;
var settings = {
    "url": "/is-log"
}

var curriculum = {
    "url": "/curriculum"
}

$('.eliminar').on('click', function() {
    if (session) {
    var opcion = confirm("Estas seguro de que quieres borrar tu cuenta?");
    if (opcion == true) {
        var borrarUsuario = {
                "url": "/delete-user",
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            }
            $.get(borrarUsuario).done(function (response) {
                if (response.ok) {
                    session = false;
                    $(location).attr('href', "/");
                } else {
                    alert('Hubo un problema al eliminar el usuario');
                }
            });
    }
    }
});


$.get(settings).done(function(response) {
    if (response.ok) {
        toggle();
        session = true;
        $('.nombre').html(response.user.name);
        $('.email').html(response.user.email);
        $('.password').html(response.user.password);
    }
});

$.get(curriculum).done(function(response) {
    if (response.ok) {
        $('.subir-curriculum').toggleClass('no-mostrar');
        $('.curriculum').toggleClass('no-mostrar');
        $('#direccion').html(response.curriculum.address);
        $('.nombre').html(response.curriculum.name);
        $('#telefono').html(response.curriculum.telephone);
        $('.email').html(response.curriculum.email);
        $('#nacimiento').html(response.curriculum.birthDate);
        $('#pais').html(response.curriculum.country);
        $('#profesion').html(response.curriculum.profession);
        $('#experiencia').html(response.curriculum.experience);
    }
});


$('.cerrar-sesion').on('click', function() {
    if (session) {
        var settings = {
            "url": "/logout",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        }

        $.get(settings).done(function(response) {
            if (response.ok) {
                toggle();
                session = false;
                $(location).attr('href',"/");
            } else {
                alert('Hubo un problema al cerrar sesion');
            }
        });
    }
});

function toggle(){
    $('.iniciar-sesion').toggleClass('no-mostrar');
    $('.perfil').toggleClass('no-mostrar');
    $('.registrar-empresa').toggleClass('no-mostrar');
}
