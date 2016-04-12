'use strict'

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/BuscaLogradouro', {
        templateUrl : 'templates/BuscaLogradouro.html',
        controller : 'logradouroController'
    }).when('/BuscaCEP', {
        templateUrl : 'templates/BuscaCEP.html',
        controller : 'cepController'
    }).otherwise({
       redirectTo : '/BuscaCEP' 
    });
}])