var app = angular.module('user', []);
app.controller('myCtrl', function ($scope, $http, $window) {
    $scope.data = {};
    $scope.submit = function () {
        console.log('clicked submit');
        $http({
            url: '/signup',
            method: 'POST',
            data: $scope.data
        }).then(function successCallback(httpResponse) {
            console.log('response:', httpResponse);
            $window.location.href = '/login.html'
        }, function errorCallback(response) {
            console.log("fallo", response.data.err.code);
            if (response.data.err.code === 11000)
                $scope.msg = "Correo electrónico ya registrado";
            else
                $scope.msg = "Por favor llena todos los campos correctamente";
        });
    };
    $http({
        url: '/is-log',
        method: 'GET',
    }).then(function successCallback(httpResponse) {
        console.log('response:', httpResponse.data.ok);
        if (httpResponse.data.ok) {
            $window.location.href = '/'
        }
    }, function errorCallback(response) {
        console.log("fallo", response);
    });
});

var app = angular.module('company', []);
app.controller('myCtrl', function ($scope, $http, $window) {
    $scope.data = {};
    $scope.submit = function () {
        console.log('clicked submit');
        $http({
            url: '/signup-company',
            method: 'POST',
            data: $scope.data
        }).then(function successCallback(httpResponse) {
            console.log('response:', httpResponse);
            $window.location.href = '/login.html'
        }, function errorCallback(response) {
            console.log("fallo", response);
            if (response.status === 400)
                $scope.msg = "Correo electrónico ya registrado";
            if (response.status === 500) {
                $scope.msg = "Completa los campos faltantes correctamente";
                if (response.data.err.code === 11000)
                    $scope.msg = "Correo electrónico o empresa ya registrados";
            }

        });
    }
});


