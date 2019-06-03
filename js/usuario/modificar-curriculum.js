var app = angular.module('user', []);
app.controller('myCtrl', function ($scope, $http, $window) {
    $scope.data = {};
    $http({
        url: '/curriculum',
        method: 'GET'
    }).then(function successCallback(response) {
        if (!response.data.ok)
            $window.location.href = '/curriculum.html';
        else {
            console.log(response.data.curriculum.address);
            $scope.data.address = response.data.curriculum.address;
            $scope.data.telephone = response.data.curriculum.telephone;
            $scope.data.birthDate = response.data.curriculum.birthDate;
            $scope.data.country = response.data.curriculum.country;
            $scope.data.profession = response.data.curriculum.profession;
            $scope.data.experience = response.data.curriculum.experience;
        }
    });

    $scope.editar = function () {
        console.log('clicked submit');
        $http({
            url: '/modify-curriculum',
            method: 'POST',
            data: $scope.data
        }).then(function successCallback(httpResponse) {
            console.log('response:', httpResponse);
            $window.location.href = '/usuario-perfil.html'
        }, function errorCallback(response) {
            $scope.msg = "Ocurrio un error no esperado, recarga la pag. por favor";
        });
    };
});
$(document).ready(function() {
    M.updateTextFields();
});
