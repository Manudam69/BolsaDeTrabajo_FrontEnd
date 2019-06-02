var app = angular.module('user', []);
app.controller('myCtrl', function ($scope, $http, $window) {
    $scope.data = {};
    $scope.submit = function () {
        $http({
            url: '/login',
            method: 'POST',
            data: $scope.data
        }).then(function successCallback(httpResponse) {
            console.log('response:', httpResponse);
            $window.location.href = '/'
        }, function errorCallback(response) {
            console.log("fallo", response.data.msg);
            $scope.msg = response.data.msg;
        });
    };

    $http({
        url: '/is-log',
        method: 'GET',
    }).then(function successCallback(httpResponse) {
        if (httpResponse.data.ok) {
            $window.location.href = '/'
        }
    });

    $scope.loginCompany = function () {
        $http({
            url: '/login-company',
            method: 'POST',
            data: $scope.data
        }).then(function successCallback(httpResponse) {
            $window.location.href = '/'
        }, function errorCallback(response) {
            console.log("fallo", response);
            $scope.ms = response.data.msg;
        });
    };


});
