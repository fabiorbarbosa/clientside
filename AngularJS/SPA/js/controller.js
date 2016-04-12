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
    $scope.UF = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PR','PB','PA','PE','PI','RJ','RN','RS','RO','RR','SC','SE','SP','TO'];
    $scope.ConsultarCEP = function () {
        serviceCorreios.getCEP($scope.inputUF, $scope.inputCidade, $scope.inputLogradouro)
            .success(function(data){
                $scope.dadosCEP = data;
            })
            .error(function(data, status){
                alert(status);
            });
    };
});