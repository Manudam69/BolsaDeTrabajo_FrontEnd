var app = angular.module('user', []);
app.controller('myCtrl', function ($scope, $http, $window) {
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