var session = false;
var settings = {
    "url": "/is-log"
}
var validar = {
  "url": "/is-validated"
}

$.get(settings).done(function(response) {
    if (response.ok) {
        toggle();
        session = true;
    }
});

$.get(validar).done(function(response) {
  if (!response.validated) {
    $('.validar').toggleClass('no-mostrar');
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
    $('.cerrar-sesion').toggleClass('no-mostrar');
    $('.iniciar-sesion').toggleClass('no-mostrar');

}
