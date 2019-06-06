var app = angular.module('user', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: './vacantes-de-trabajo.html',
    controller: 'myCtrl'
  }).
  when('/vacantes/:personId',{
    templateUrl: 'oferta-de-empleo.html',
    controller: 'Ctrl2'
  });
});

app.controller('myCtrl', function($scope,$location,$http) {
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
  $scope.goTo2 = function(person) {
     $location.url('/vacantes/' + person.id);
  };
});

app.controller('Ctrl2', function($scope, $routeParams,$http) {
    $http({
        url: '/req-job',
        method: 'POST',
        data: {
            id: $routeParams.personId
        }
    }).then(function successCallback(httpResponse) {
        if (httpResponse.data.ok) {
           console.log(httpResponse.data);
           $scope.vacantes = httpResponse.data.job;
        }
    }, function errorCallback(response) {
        console.log("fallo", response);
    });
});
