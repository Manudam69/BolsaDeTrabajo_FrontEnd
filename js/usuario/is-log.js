var settings = {
    "url": "/is-log"
}

$.get(settings).done(function (response) {
    if (response.ok) {
        $("#sesion-cel").html('<a href="./login.html">Cerrar sesión<i class="material-icons">account_circle</i></a>')
        $("#sesion-web").html('<a href="./login.html">Cerrar sesión<i class="material-icons right">account_circle</i></a>')
        session = true;
    }
});