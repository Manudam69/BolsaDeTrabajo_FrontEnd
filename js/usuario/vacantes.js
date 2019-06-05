var app = angular.module('user', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'vacantes-de-trabajo.html',
    controller: 'myCtrl'
  }).
  when('/vacantes/:personId',{ //Aca se le agrega :personId para que despues se pueda tomar desde el routeParams
    templateUrl: 'oferta-de-empleo.html',
    controller: 'Ctrl2'
  });
});

app.controller('myCtrl', function($scope, $location,$http) {
  $http({
      url: '/job',
      method: 'GET',
  }).then(function successCallback(httpResponse) {
      if (httpResponse.data.ok) {
          $scope.vacantes = httpResponse.data.job;
      }
  }, function errorCallback(response) {
      console.log("fallo", response);
  });
  $scope.goTo2 = function(person) {
    console.log('heyyyyyyy');
     $location.url('/vacantes/' + person.id); //el $location identifica person como una variable
  };
});
app.controller('Ctrl2', function($scope, $routeParams) {
   $scope.message = 'PersonId = ' + $routeParams.personId; //routeParams tomando el valor...
});
