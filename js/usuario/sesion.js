var app = angular.module('user', []);
app.controller('myCtrl', function ($scope, $http, $window) {
    $scope.cerrar = false;
    $scope.iniciar = true;
    $http({
        url: '/is-log',
        method: 'GET',
    }).then(function successCallback(httpResponse) {
        $scope.name = "El farolito";
        $scope.email = "Bolsa de trabajo";
        console.log(httpResponse.data);
        if (httpResponse.data.ok && httpResponse.data.user != null) {
            //información en el perfil del usuario
            $scope.name = httpResponse.data.user.name;
            $scope.email = httpResponse.data.user.email;
            $scope.password = httpResponse.data.user.password;
            //cambio de botones en el navbar al detectar sesión
            $scope.iniciar = false;
            $scope.cerrar = true;
        } else {

            if (httpResponse.data.ok) {
                $scope.iniciar = false;
                $scope.cerrar = true;
                console.log("hola");
            }
        }
    }, function errorCallback(response) {
        console.log("fallo", response);
    });

    $http({
        url: '/curriculum',
        method: 'GET',
    }).then(function successCallback(httpResponse) {
        $scope.curriculum = false;
        $scope.subirCurriculum = true;
        if (httpResponse.data.ok) {
            $scope.curriculum = true;
            $scope.subirCurriculum = false;
            $scope.direccion = httpResponse.data.curriculum.address;
            $scope.nacimiento = httpResponse.data.curriculum.birthDate;
            $scope.telefono = httpResponse.data.curriculum.telephone;
            $scope.experiencia = httpResponse.data.curriculum.experience;
            $scope.profesion = httpResponse.data.curriculum.profession;
            $scope.pais = httpResponse.data.curriculum.country;
        }
    }, function errorCallback(response) {
        console.log("fallo", response);
    });

    $scope.cerrarSesion = function () {
        console.log('clicked cerrar sesion');
        $http({
            url: '/logout',
            method: 'GET',
        }).then(function successCallback(httpResponse) {
            if (httpResponse.data.ok) {
                $window.location.href = '/';
            }
        }, function errorCallback(response) {
            console.log("fallo", response);
        });
    }

    $scope.eliminar = function () {
        $http({
            url: '/delete-user',
            method: 'GET',
        }).then(function successCallback(httpResponse) {
            if (httpResponse.data.ok) {
                $window.location.href = '/';
            }
        }, function errorCallback(response) {
            console.log("fallo", response);
        });
    }
});
