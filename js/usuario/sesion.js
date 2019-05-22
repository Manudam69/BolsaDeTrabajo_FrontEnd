var session = false;
var settings = {
    "url": "/is-log"
}

$.get(settings).done(function(response) {
    if (response.ok) {
        toggle();
        session = true;
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
            } else {
                alert('Hubo un problema al cerrar sesion');
            }
        });
    }
});

function toggle() {
    $('.iniciar-sesion').toggleClass('no-mostrar');
    $('.perfil').toggleClass('no-mostrar');
    $('.registrar-empresa').toggleClass('no-mostrar');

}
