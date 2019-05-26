$(document).ready(function(){
    $.get("/js/estilos/paises.json",function (res) {
        $('input.autocomplete').autocomplete({
            data: res,
            limit: 2
        });
    });
});
        