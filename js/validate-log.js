var settings = {
    "url": "/is-log"
}

$('#registro').click(function () {
    if(!session) {
        $(location).attr('href', "/signup.html");
    }
});
