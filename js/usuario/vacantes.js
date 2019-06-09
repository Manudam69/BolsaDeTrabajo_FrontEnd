var app = angular.module('user', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './vacantes-de-trabajo.html',
        controller: 'myCtrl'
    }).when('/vacantes/:personId', {
        templateUrl: 'oferta-de-empleo.html',
        controller: 'Ctrl2'
    });
});

app.controller('myCtrl', function ($scope, $location, $http) {
    $http({
        url: '/jobs',
        method: 'GET',
    }).then(function successCallback(httpResponse) {
        if (httpResponse.data.ok) {
            $scope.vacantes = httpResponse.data.job;
        }
    }, function errorCallback(response) {
        console.log("fallo", response);
    });
    $scope.goTo2 = function (person) {
        $location.url('/vacantes/' + person.id);
    };
});

app.controller('Ctrl2', function ($scope, $routeParams, $http, $window) {
    $http({
        url: '/req-job',
        method: 'POST',
        data: {
            id: $routeParams.personId
        }
    }).then(function successCallback(httpResponse) {
        //console.log(httpResponse.data);
        $scope.vacantes = httpResponse.data.job;
        var trabajo = httpResponse.data.job;
        $http({
            url: '/is-log',
            method: 'GET',
        }).then(function successCallback(Response) {
            $scope.apply = function () {
                $http({
                    url: '/apply',
                    method: 'POST',
                    data: {
                        email: trabajo.email,
                        projectName: trabajo.projectName,
                        link: "http://localhost:8000/curriculums.html#!/curriculums/" + Response.data.user._id
                    }
                }).then(function successCallback(res) {
                    console.log(res);
                    alert("Correo de postulacion enviado");
                    $window.location.href = '/index.html'
                }, function errorCallback(response) {
                    console.log("fallo", response);
                    $window.location.href = '/login.html'
                });
            };
        }, function errorCallback(response) {
            $scope.apply = function () {
                $window.location.href = '/login.html'
            };
           // console.log("fallo", response);
        });

        $scope.goTo2 = function (person) {
            $location.url('/vacantes/' + person.id);
        };
    }, function errorCallback(response) {
        console.log("fallo", response);
    });


});
