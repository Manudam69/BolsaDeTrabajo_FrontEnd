$('#newUser').on("click", function () {
    var settings = {
        "url": "/signup",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "data": {
            "name": $.trim($("#name").val()),
            "user": $.trim($("#user").val()),
            "email": $.trim($("#email").val()),
            "password": $.trim($("#contraseña").val())
        }
    }

    $.post(settings).done(function (response) {
        console.log(response);
    });
});