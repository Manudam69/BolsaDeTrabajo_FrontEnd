var settings = {
    "url": "/is-log"
}

$.get(settings).done(function (response) {
    if (!response.ok) {
        $(location).attr('href',"/login.html");
    }
});
