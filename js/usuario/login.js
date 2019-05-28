var session = false;

var app = angular.module('user', []);
app.controller('myCtrl', function($scope, $http, $window) {
  $scope.error = false;
  $scope.data = {};
  $scope.submit = function() {
    console.log('clicked submit');
    $http({
      url: '/login',
      method: 'POST',
      data: $scope.data
    }).then(function successCallback(httpResponse) {
      session = true;
      console.log('response:', httpResponse);
      $window.location.href = '/'
    },function errorCallback(response){
      $scope.error = true;
        console.log("fallo",response);
    });
  }
});
