var app = angular.module('user', []);
app.controller('myCtrl', function ($scope, $http, $window) {
    $http({
        url: '/is-log',
        method: 'GET',
    }).then(function successCallback(httpResponse) {
        if(httpResponse.data.user != null){
            if(httpResponse.data.user.type == "company") {
                $scope.subir = function () {
                    console.log('clicked submit');
                    $http({
                        url: '/job-upload',
                        method: 'POST',
                        data: $scope.data
                    }).then(function successCallback(httpResponse) {
                        console.log('response:', httpResponse);
                        $window.location.href = '/usuario-perfil.html'
                    }, function errorCallback(response) {
                        $scope.msg = "Por favor llena todos los campos correctamente";
                    });
                };
            }
        }else{
            $window.location.href = '/'
        }
    }, function errorCallback(response) {
        console.log("fallo", response);
    });

});