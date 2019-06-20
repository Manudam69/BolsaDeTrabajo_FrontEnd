var settings = {
    "url": "/is-log"
}

$.get(settings).fail(function (response) {
    $(location).attr('href',"/login.html");
});
