var app = angular.module('user', []);
app.controller('myCtrl', function ($scope, $http, $window) {
    $scope.error = false;
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
            console.log("fallo", response);
            $scope.error = true;
        });
    }
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
    $scope.error = false;
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
            $scope.error = true;
        });
    }
});


