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
        if (httpResponse.data.ok && httpResponse.data.user.type == "user") {
            //información en el perfil del usuario
            $scope.name = httpResponse.data.user.name;
            $scope.email = httpResponse.data.user.email;
            $scope.password = httpResponse.data.user.password;
            $scope.eliminarUsuario = true;
            $scope.eliminarEmpresa = false;
            $scope.subirVacante = false;
            //cambio de botones en el navbar al detectar sesión
            $scope.iniciar = false;
            $scope.cerrar = true;

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
        }

        if (httpResponse.data.ok && httpResponse.data.user.type == "company") {
            $scope.eliminarUsuario = false;
            $scope.eliminarEmpresa = true;
            $scope.subirCurriculum = false;
            $scope.subirVacante = true;
            $scope.name = httpResponse.data.user.companyName;
            $scope.email = httpResponse.data.user.email;
            $scope.iniciar = false;
            $scope.cerrar = true;

            $http({
                url: '/job',
                method: 'GET',
            }).then(function successCallback(httpResponse) {
                if (httpResponse.data.ok) {
                    $scope.subirVacante = false;
                    $scope.verVacante = true;
                }
            }, function errorCallback(response) {
                console.log("fallo", response);
            });
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
    };

    $scope.eliminarUsuariob = function () {
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
    };


    $scope.eliminarEmpresab = function () {
        $http({
            url: '/delete-company',
            method: 'GET',
        }).then(function successCallback(httpResponse) {
            if (httpResponse.data.ok) {
                $window.location.href = '/';
            }
        }, function errorCallback(response) {
            console.log("fallo", response);
        });
    };

});