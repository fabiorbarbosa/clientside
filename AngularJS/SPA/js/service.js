'use strict'

app.value('config', {
    baseUrlLogradouro : 'http://viacep.com.br/ws/{0}/json/',
    baseUrlCEP : 'http://viacep.com.br/ws/{0}/{1}/{2}/json/'
})
.service('serviceCorreios', function ($http, config) {
    this.getLogradouro = function (cep) {
        return $http.get(String.format(config.baseUrlLogradouro, cep));
    }
    this.getCEP = function (uf, cidade, logradouro) {
        return $http.get(String.format(config.baseUrlCEP, uf, cidade, logradouro));
    }
});