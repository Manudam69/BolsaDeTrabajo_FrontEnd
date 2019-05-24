var settings = {
    "url": "/curriculum"
}

$.get(settings).done(function(response) {
    if (response.ok) {
        toggle();
        session = true;
    }
});

function toggle(){
    $('.iniciar-sesion').toggleClass('no-mostrar');
    $('.perfil').toggleClass('no-mostrar');
    $('.registrar-empresa').toggleClass('no-mostrar');
}
