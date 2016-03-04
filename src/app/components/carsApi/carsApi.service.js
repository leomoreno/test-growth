(function() {
  'use strict';

  angular
      .module('testGrowth')
      .factory('carsApi', carsApi);

  /** @ngInject */
  function carsApi($q, $resource) {
    var defered = null;
    var apiUrl = '/data/cars.json';
    var service = {
      apiUrl: apiUrl,
      getCars: getCars
    };
    var carsMethods = {
      get:{isArray: true}
    };
    return service;

    function getCars() {
      defered = $q.defer();
      var Data = $resource(apiUrl,{},carsMethods);
      Data.get({isArray: false},
        function(response) {
          var cars = [];
          angular.forEach(response, function(e){ cars.push(e); });
          defered.resolve(cars);
        },
        function(response){
          return defered.reject(response);
        }
      );
      return defered.promise;
    }
  }

})();
