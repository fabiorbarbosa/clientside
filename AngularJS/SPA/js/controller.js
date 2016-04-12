'use strict'

app.controller('logradouroController', function ($scope, serviceCorreios) {
    $scope.ConsultarLogradouro = function () {
        serviceCorreios.getLogradouro($scope.inputCep)
            .success(function(data){
                $scope.dadosLogradouro = data;
            })
            .error(function(data, status){
                alert(status);
            });
    };
}).controller('cepController', function ($scope, serviceCorreios) {
    $scope.ConsultarCEP = function () {
        serviceCorreios.getCEP($scope.inputLogradouro)
            .success(function(data){
                $scope.dadosCEP = data;
            })
            .error(function(data, status){
                alert(status);
            });
    };
});