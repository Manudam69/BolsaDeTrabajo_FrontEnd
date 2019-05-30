var app = angular.module('user', []);
app.controller('myCtrl', function ($scope, $http, $window) {
  $scope.data = {};
  $scope.subir = function () {
      console.log('clicked submit');
      $http({
          url: '/curriculum-upload',
          method: 'POST',
          data: $scope.data
      }).then(function successCallback(httpResponse) {
          console.log('response:', httpResponse);
          $window.location.href = '/login.html'
      }, function errorCallback(response) {
          $scope.msg= "Por favor llena todos los campos";
      });
  };
});
