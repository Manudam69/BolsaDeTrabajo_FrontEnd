var app = angular.module('user', []);
app.controller('myCtrl', function($scope, $http, $window) {
  $scope.cerrar = false;
  $scope.iniciar = true;
  $http({
    url: '/is-log',
    method: 'GET',
  }).then(function successCallback(httpResponse) {
    console.log('response:', httpResponse.data.ok);
    if (httpResponse.data.ok) {
      $scope.iniciar = false;
      $scope.cerrar = true;
      session = false;
    }


  }, function errorCallback(response) {
    console.log("fallo", response);
  });

  $scope.cerrarSesion = function() {
    console.log('clicked cerrar sesion');
      $http({
        url: '/logout',
        method: 'GET',
      }).then(function successCallback(httpResponse) {
        console.log('response:', httpResponse);
        if (httpResponse.data.ok) {
          $window.location.href = '/'
        }
      }, function errorCallback(response) {
        console.log("fallo", response);
      });

  }
});
