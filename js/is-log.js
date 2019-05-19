var settings = {
    "url": "/is-log"
}

$.get(settings).done(function (response) {
    if (response.ok) {
        $('#sesion').html('<a href="#" class="nav-link id="logout"">Cerrar Sesión</a>')
    }
});
