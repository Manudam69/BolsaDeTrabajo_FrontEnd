var app = angular.module('user', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './curriculums-usuarios.html',
        controller: 'myCtrl'
    }).when('/curriculums/:personId', {
        templateUrl: 'perfil-usuario.html',
        controller: 'Ctrl2'
    });
});


app.controller('myCtrl', function ($scope, $location, $http) {
    $http({
        url: '/curriculums',
        method: 'GET',
    }).then(function successCallback(httpResponse) {
        if (httpResponse.data.ok) {
            //console.log(httpResponse.data);
            //console.log(httpResponse.data);
            $scope.cur = httpResponse.data.curriculums;
        }
    }, function errorCallback(response) {
        console.log("fallo", response);
    });
    $scope.goTo2 = function (person) {
        $location.url('/curriculums/' + person.id);
    };
});

app.controller('Ctrl2', function ($scope, $routeParams, $http) {
    $http({
        url: '/req-curr',
        method: 'POST',
        data: {
            id: $routeParams.personId
        }
    }).then(function successCallback(httpResponse) {
        $scope.curriculum = httpResponse.data.curriculum;
        $http({
            url: '/is-log',
            method: 'GET',
        }).then(function successCallback(response) {
            if (response.data.user.type == "company") {
                $scope.postulante = true;
                $http({
                    url: '/job',
                    method: 'GET',
                }).then(function successCallback(res) {
                    $scope.items = res.data.job;

                    $scope.enviar = function () {

                        $http({
                            url: '/quest',
                            method: 'POST',
                            data: {
                                email: httpResponse.data.curriculum.email,
                                companyEmail: response.data.user.email,
                                joblink: "http://localhost:8000/vacantes.html#!/vacantes/" + $scope.data.projectName._id,
                                questions: $scope.data.questions
                            }
                        }).then(function successCallback(respuesta) {
                            console.log("se pudo");
                            console.log($scope.data.projectName._id);

                        }, function errorCallback(response) {
                            console.log("fallo", response);
                        });
                    }
                }, function errorCallback(response) {
                    //console.log("fallo", response);
                });
            }
        }, function errorCallback(response) {
        });

    }, function errorCallback(response) {
        console.log("fallo", response);
    });


});