$('#sesion').click(function () {
    var settings = {
        "url": "/logout",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
    
    $.get(settings).done(function (response) {
        if (response.ok) {
            location.reload();
        }
    });
    
});
