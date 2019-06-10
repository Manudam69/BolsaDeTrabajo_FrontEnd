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
            console.log(httpResponse.data);
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
        if (httpResponse.data.ok) {
            console.log(httpResponse.data.curriculum);
            $scope.curriculum = httpResponse.data.curriculum;
        }
    }, function errorCallback(response) {
        console.log("fallo", response);
    });
});